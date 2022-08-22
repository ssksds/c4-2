import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  Spinner,
  Stack
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export const Login = () => {
  const { loginUser } = useContext(AppContext);
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())

      .then((res) => {
        console.log(res);
        loginUser(res.token);
        navigate("/dashboard");
      });
  };

  return (
    <>
      <Container maxW="md">
        <FormControl onSubmit={handleSubmit}>
          <Stack>
            <Input
              type="email"
              placeholder="email"
              value={formState.email}
              name="email"
              onChange={handleChange}
            />
            <Input
              type="password"
              placeholder="password"
              value={formState.password}
              name="password"
              onChange={handleChange}
            />
            <Button bgColor="blueviolet" onClick={handleSubmit}>
              Submit
              {isLoading && <Spinner color="red.500" />}
            </Button>
          </Stack>
        </FormControl>
      </Container>
    </>
  );
};
