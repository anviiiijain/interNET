import React, { useState } from "react";
import { history } from "../../history";
import { FormGenerator } from "../shared/FormGenerator";

export function CompanyDetails() {
  const [companyData, setCompanyData] = useState({
    companyName: "",
    regNumber: "",
    companyAddress: "",
    city: "",
    state: "",
    contactNo: "",
    contactNo2: "",
    email: "",
    website: "",
  });
  const CompanyFormSchema = {
    companyName: {
      width: "w-1/2",
      placeholder: "Company Name",
      value: companyData.companyName,
      onChange: (e) =>
        setCompanyData({ ...companyData, companyName: e.target.value }),
      type: "text",
      required: true,
    },
    regNumber: {
      width: "w-1/2",
      placeholder: "registration number",
      value: companyData.regNumber,
      onChange: (e) =>
        setCompanyData({ ...companyData, regNumber: e.target.value }),
      type: "text",
      required: true,
    },
    companyAddress: {
      width: "w-full",
      placeholder: "Address",
      value: companyData.companyAddress,
      onChange: (e) =>
        setCompanyData({ ...companyData, companyAddress: e.target.value }),
      type: "text",
      required: true,
    },
    city: {
      width: "w-1/2",
      placeholder: "City",
      value: companyData.city,
      onChange: (e) => setCompanyData({ ...companyData, city: e.target.value }),
      type: "text",
      required: true,
    },
    state: {
      width: "w-1/2",
      placeholder: "State",
      value: companyData.state,
      onChange: (e) =>
        setCompanyData({ ...companyData, state: e.target.value }),
      type: "text",
      required: true,
    },
    contactNo: {
      width: "w-1/2",
      placeholder: "Contact Number",
      value: companyData.contactNo,
      onChange: (e) =>
        setCompanyData({ ...companyData, contactNo: e.target.value }),
      type: "text",
      required: true,
    },
    contactNo2: {
      width: "w-1/2",
      placeholder: "Contact Number(optional)",
      value: companyData.contactNo2,
      onChange: (e) =>
        setCompanyData({ ...companyData, contactNo2: e.target.value }),
      type: "text",
      required: false,
    },
    email: {
      width: "w-1/2",
      placeholder: "Email",
      value: companyData.email,
      onChange: (e) =>
        setCompanyData({ ...companyData, email: e.target.value }),
      type: "email",
      required: true,
    },
    website: {
      width: "w-1/2",
      placeholder: "Website url (if any)",
      value: companyData.website,
      onChange: (e) =>
        setCompanyData({ ...companyData, website: e.target.value }),
      type: "text",
      required: false,
    },
    button: {
      text: "Next",
      type: "button",
      appearance: "filled",
      size: "md",
      color: "primary",
      className: "float-right",
    },
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("companyData", companyData);
    setCompanyData({
      companyName: "",
      regNumber: "",
      companyAddress: "",
      city: "",
      state: "",
      contactNo: "",
      contactNo2: "",
      email: "",
      website: "",
    });
    history.push("/profile/2");
    window.location.reload();
  };

  return (
    <>
      <h2 className="text-2xl font-bold tracking-wider text-center my-5">
        Company Details
      </h2>
      <FormGenerator
        formLayout="inline"
        formSchema={CompanyFormSchema}
        onSubmit={onSubmit}
      />
    </>
  );
}
