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
          border: "3px solid #FF0000",
          padding: "18px 0",
          fontWeight: "700",
        }}
      >
        <NavbarBrand>
          <Link
            to="/"
            className="w-36 h-14"
            style={{ fontSize: "30px", fontWeight: "800" }}
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
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About Us</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact Us</Link>
          </NavItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Navber;
