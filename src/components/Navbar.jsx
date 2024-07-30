import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          <img src="/placeholder.svg" alt="Logo" className="h-8 w-8 inline-block mr-2" />
          HN Stories
        </Link>
        <Button variant="outline">Sign In</Button>
      </div>
    </nav>
  );
};

export default Navbar;
