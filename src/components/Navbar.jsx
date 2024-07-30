import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-card shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary-foreground flex items-center">
          <Terminal className="h-6 w-6 mr-2" />
          HN_Hacker
        </Link>
        <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary hover:text-primary-foreground">Sign In</Button>
      </div>
    </nav>
  );
};

export default Navbar;
