import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavItem,
} from "responsive-navigation";

const Navber = () => {
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          border: "1px solid #FF0000",
          padding: "16px 0",
          fontWeight: "700",
          color: "red",
        }}
      >
        <NavbarBrand>
          <Link
            to="/"
            className="w-36 h-14"
            style={{ color: "red", fontSize: "30px", fontWeight: "800" }}
          >
            <img
              className="w-full h-full"
              src="/Navber-logo.png"
              alt="Navber-logo"
            />
          </Link>
        </NavbarBrand>
        <NavbarContent>
          <NavItem>
            <Link to="/" className="text-black">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="text-black">
              About Us
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" className="text-black">
              Contact Us
            </Link>
          </NavItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Navber;
