import React from "react";
import { Login } from "../registration/Login";
import { SignUp } from "../registration/SignUp";
import { Route, Routes } from "react-router-dom";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
