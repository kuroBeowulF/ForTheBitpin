import React from "react";
import Navbar from "../NavBar/Navbar";
interface props {
  children: React.ReactNode;
}
export default function Layout({ children }: props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
