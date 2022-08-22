import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import DashBoard from "./Dashboard";
import Home from "./Home";
import { Login } from "./Login";

export default function AllRoutes() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Box>
  );
}
