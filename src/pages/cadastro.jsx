import Footer from "@/components/footer/Footer";
import Register from "../components/register/Register";
import React from "react";
import Header from "../components/header/Header";
const pageregister = () => {
  return (
    <div>
      <Header title="Página de Cadastro" />
      <Register />
      <Footer />
    </div>
  );
};

export default pageregister;
