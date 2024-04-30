import React from "react";
import { Login } from "../registration/Login";
import { SignUp } from "../registration/SignUp";
import { Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
export const MainRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
