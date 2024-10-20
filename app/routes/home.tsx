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
    <main className="flex flex-col items-center justify-center gap-8 m-auto w-full max-w-4xl px-4">
      <Card className="w-full sm:w-2/3 md:w-1/2 h-40 shadow-md rounded-xl transition-all hover:shadow-xl hover:scale-105 cursor-pointer overflow-hidden group">
        <CardContent className="flex items-center justify-center h-full p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <h2 className="text-2xl font-semibold group-hover:scale-110 transition-transform duration-200">Connect Bank Accounts</h2>
        </CardContent>
      </Card>
      <Card className="w-full sm:w-2/3 md:w-1/2 h-40 shadow-md rounded-xl transition-all hover:shadow-xl hover:scale-105 cursor-pointer overflow-hidden group">
        <CardContent className="flex items-center justify-center h-full p-6 bg-gradient-to-br from-green-500 to-teal-600 text-white">
          <h2 className="text-2xl font-semibold group-hover:scale-110 transition-transform duration-200">Connect Credit Cards</h2>
        </CardContent>
      </Card>
      <Card className="w-full sm:w-2/3 md:w-1/2 h-40 shadow-md rounded-xl transition-all hover:shadow-xl hover:scale-105 cursor-pointer overflow-hidden group">
        <CardContent className="flex items-center justify-center h-full p-6 bg-gradient-to-br from-orange-500 to-red-600 text-white">
          <h2 className="text-2xl font-semibold group-hover:scale-110 transition-transform duration-200">Connect Web3 Wallets</h2>
        </CardContent>
      </Card>
    </main>
  </div>
);
}
