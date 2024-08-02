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
        }}
      >
        <NavbarBrand>
          <Link
            to="/"
            className="w-36 h-14"
            style={{ fontSize: "30px", fontWeight: "700" }}
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
            <a href="/">Home</a>
          </NavItem>
          <NavItem>
            <a href="/about">About Us</a>
          </NavItem>
          <NavItem>
            <a href="/contact">Contact Us</a>
          </NavItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Navber;
