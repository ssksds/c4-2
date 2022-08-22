import { Container, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Flex>
        <Heading>
          <Link to="/">
            Home
          </Link>
        </Heading>
        <Spacer />
        <Heading>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </Heading>
        <Spacer />
        <Heading>
          <Link to="/login">
            Login_page
          </Link>
        </Heading>
      </Flex>
    </Container>
  );
}
