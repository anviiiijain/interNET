import React, { useState } from "react";
import { FormGenerator } from "../shared/FormGenerator";

export function InternshipDetails(props) {
  // const { hide } = props;
  const [internshipData, setInternshipData] = useState({
    role: "",
    internshipType: "",
    modeOfInternship: "",
    techStack: [],
  });
  const techOptions = [
    {
      id: "1",
      value: "React",
    },
    {
      id: "2",
      value: "Node",
    },
    {
      id: "3",
      value: "JS",
    },
    {
      id: "4",
      value: "Express",
    },
  ];
  const InternshipFormSchema = {
    role: {
      width: "w-full",
      className: "w-1/2 align-self-center",
      placeholder: "Role",
      value: internshipData.role,
      onChange: (e) =>
        setInternshipData({ ...internshipData, role: e.target.value }),
      type: "text",
      required: true,
    },
    internshipType: {
      width: "w-full",
      className: "w-1/2 align-self-center",
      placeholder: "Internship Type",
      value: internshipData.internshipType,
      onChange: (value) =>
        setInternshipData({ ...internshipData, internshipType: value }),
      type: "select",
      options: ["paid", "free"],
      required: true,
    },
    modeOfInternship: {
      width: "w-full",
      className: "w-1/2 align-self-center",
      placeholder: "Mode of Internship",
      value: internshipData.modeOfInternship,
      onChange: (value) =>
        setInternshipData({ ...internshipData, modeOfInternship: value }),
      type: "select",
      options: ["online", "offline"],
      required: true,
    },
    techStack: {
      width: "w-full",
      className: "w-1/2 align-self-center",
      placeholder: "Tech Stack",
      value: internshipData.techStack,
      options: techOptions,
      setValue: (value) =>
        setInternshipData({ ...internshipData, techStack: value }),
      type: "multiselect",
      required: true,
    },
    button: {
      text: "Submit",
      type: "button",
      appearance: "filled",
      size: "md",
      color: "primary",
      className: "float-right",
    },
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("internshipData", internshipData);
    setInternshipData({
      role: "",
      internshipType: "",
      modeOfInternship: "",
      techStack: [],
    });
    // hide(false);
  };

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-2xl font-bold tracking-wider text-center my-5">
        Internship Details
      </h2>
      <FormGenerator
        formLayout="inline"
        formSchema={InternshipFormSchema}
        onSubmit={onSubmit}
      />
    </div>
  );
}
