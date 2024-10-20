import { Plutus } from "../typechain-types";
import { task, types } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

task("task:updateCreditCardBalance")
  .addPositionalParam("amount", "Credit card balance amount to update", 0, types.int)
  .setAction(async function (taskArguments: TaskArguments, hre) {
    const { fhenixjs, ethers, deployments } = hre;
    const [signer] = await ethers.getSigners();

    if ((await ethers.provider.getBalance(signer.address)).toString() === "0") {
      await fhenixjs.getFunds(signer.address);
    }

    const balanceAmount = Number(taskArguments.amount);
    const PlutusDeployment = await deployments.get("Plutus");

    console.log(
      `Running updateCreditCardBalance(${balanceAmount}), targeting contract at: ${PlutusDeployment.address}`,
    );

    const contract = await ethers.getContractAt("Plutus", PlutusDeployment.address);

    const encryptedAmount = await fhenixjs.encrypt_uint32(balanceAmount);

    let contractWithSigner = contract.connect(signer) as unknown as Plutus;

    try {
      await contractWithSigner.updateCreditCardBalance(encryptedAmount);
      console.log("Credit card balance updated successfully");
    } catch (e) {
      console.log(`Failed to update credit card balance: ${e}`);
    }
  });
