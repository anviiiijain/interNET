/**
 *
 * LoginPage
 *
 */
import { Card } from "../components/shared/Card";
import { FormGenerator } from "../components/shared/FormGenerator";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ReactComponent as Login } from "../assets/Login.svg";

export function LoginPage(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const formSchema = {
    email: {
      width: "w-full",
      placeholder: "Email",
      value: formData.email,
      onChange: (e) => setFormData({ ...formData, email: e.target.value }),
      type: "email",
      label: "Email",
      required: true,
    },
    password: {
      width: "w-full",
      placeholder: "Password",
      value: formData.password,
      onChange: (e) => setFormData({ ...formData, password: e.target.value }),
      type: "password",
      label: "Password",
      required: true,
    },
    button: {
      text: "Login",
      type: "button",
      appearance: "filled",
      size: "md",
      color: "primary",
      className: "mx-auto w-24",
    },
  };

  const onSubmit = (e) => {
    e?.preventDefault();
    console.log("formData", formData);
  };

  return (
    <div className="md:grid grid-cols-3 lg:grid-cols-2 w-screen h-screen items-center">
      <div className="hidden md:block">
        <Login />
      </div>
      <div className="bg-primary col-span-2 lg:col-span-1 h-full flex items-center justify-center">
        <Card
          shadow="shadow-none"
          width="w-11/12 md:w-2/3 xl:w-1/2"
          height="h-auto"
          className="px-4 py-8 sm:px-8 sm:py-16 rounded-2xl"
        >
          <FormGenerator
            formSchema={formSchema}
            onSubmit={onSubmit}
            gap="gap-y-2 md:gap-y-4"
          />
        </Card>
      </div>
    </div>
  );
}
