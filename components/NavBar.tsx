import { categorySlugs } from "@/services/api/article";
import { capitalizeFirstLetter } from "@/utils/String";
import Link from "next/link";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Toggle aria-controls="mainNavBar" />
                <Navbar.Collapse id="mainNavBar">
                    <Nav>
                        <Nav.Link href="/" as={Link}>News</Nav.Link>
                        <Nav.Link href="/search" as={Link}>Search</Nav.Link>
                        <NavDropdown title='Categories' id="categoriesDropDown">
                            {
                                categorySlugs.map(slug => {
                                    return (
                                        <NavDropdown.Item key={slug} as={Link} href={`/categories/${slug}`}>
                                            {capitalizeFirstLetter(slug)}
                                        </NavDropdown.Item>
                                    )
                                })
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;