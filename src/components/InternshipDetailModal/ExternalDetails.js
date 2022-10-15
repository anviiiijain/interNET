import React, { useState } from "react";
import { history } from "../../history";
import { FormGenerator } from "../shared/FormGenerator";

export function ExternalDetails(props) {
  const [externalData, setExternalData] = useState({
    externalName: "",
    externalData: "",
    externalEmail: "",
    contactNo: "",
    contactNo2: "",
  });
  const ExternalFormSchema = {
    externalName: {
      width: "w-full",
      className: "w-1/2 align-self-center",
      placeholder: "External's Name",
      value: externalData.externalName,
      onChange: (e) =>
        setExternalData({ ...externalData, externalName: e.target.value }),
      type: "text",
      required: true,
    },
    externalEmail: {
      width: "w-full",
      className: "w-1/2 align-self-center",
      placeholder: "External's Email",
      value: externalData.externalEmail,
      onChange: (e) =>
        setExternalData({ ...externalData, externalEmail: e.target.value }),
      type: "email",
      required: true,
    },
    contactNo: {
      width: "w-full",
      className: "w-1/2 align-self-center",
      placeholder: "Contact Number",
      value: externalData.contactNo,
      onChange: (e) =>
        setExternalData({ ...externalData, contactNo: e.target.value }),
      type: "text",
      required: true,
    },
    contactNo2: {
      width: "w-full",
      className: "w-1/2 align-self-center",
      placeholder: "Contact Number(optional)",
      value: externalData.contactNo2,
      onChange: (e) =>
        setExternalData({ ...externalData, contactNo2: e.target.value }),
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
    console.log("externalData", externalData);
    setExternalData({
      externalName: "",
      externalData: "",
      externalEmail: "",
      contactNo: "",
      contactNo2: "",
    });
    history.push("/profile/3");
    window.location.reload();
  };

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-2xl font-bold tracking-wider text-center my-5">
        External Details
      </h2>
      <FormGenerator
        formLayout="inline"
        formSchema={ExternalFormSchema}
        onSubmit={onSubmit}
      />
    </div>
  );
}
