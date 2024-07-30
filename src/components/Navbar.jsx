import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 flex items-center">
          <Newspaper className="h-6 w-6 mr-2" />
          HN Stories
        </Link>
        <Button variant="outline">Sign In</Button>
      </div>
    </nav>
  );
};

export default Navbar;
