import { Button } from "components/ui/button";
import { LogOut } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full">
      <div className="text-xl font-bold">
        <a href="/">Plutus</a>
      </div>
      <div className="flex-grow"></div>
      <Button variant="ghost" size="sm">
        <LogOut className="mr-2 h-4 w-4" />
      </Button>
    </nav>
  );
}
