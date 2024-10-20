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
            <main className="flex flex-row items-center w-full">
                <div className="w-1/2">
                    <h1>Balance</h1>
                </div>
                <div className="w-1/2">
                    <h1>Money Owed</h1>
                </div>
            </main>
        </div>
    );
}
