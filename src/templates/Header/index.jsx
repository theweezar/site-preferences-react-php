import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <NavLink className="nav-link" to="/">Site</NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink className="nav-link" to="./preferences">Preferences</NavLink>
      </Nav.Item>
      <Nav.Item as="li" className="ms-auto">
        <Nav.Link href="/logout">Log out</Nav.Link>
      </Nav.Item>
    </Nav>
  )
};