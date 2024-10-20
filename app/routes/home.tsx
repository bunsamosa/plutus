import { Navbar } from "components/Navbar";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export default function Home() {
const { user } = useDynamicContext();
console.log(user?.verifiedCredentials)
  return (
    <div className="flex p-2 flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center gap-10 m-auto w-full">
        <Card className="w-1/3 h-32 border-2 border-gray-300 rounded-lg transition-all hover:shadow-lg hover:border-blue-500 cursor-pointer">
          <CardContent className="flex items-center justify-center h-full">
            Connect Bank accounts
          </CardContent>
        </Card>
        <Card className="w-1/3 h-32 border-2 border-gray-300 rounded-lg transition-all hover:shadow-lg hover:border-blue-500 cursor-pointer">
          <CardContent className="flex items-center justify-center h-full">
            Connect Credit Cards
          </CardContent>
        </Card>
        <Card className="w-1/3 h-32 border-2 border-gray-300 rounded-lg transition-all hover:shadow-lg hover:border-blue-500 cursor-pointer">
          <CardContent className="flex items-center justify-center h-full">
            Connect Web3 wallets
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
