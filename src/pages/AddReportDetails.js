/**
 *
 * AddReportDetails
 *
 */
import React, { useState } from "react";
import { FormGenerator } from "../components/shared/FormGenerator";
import { SideLayout } from "../components/shared/SideLayout";

export function AddReportDetails() {
  const [reportData, setReportData] = useState({
    title: "",
    description: "",
  });

  const AddReportSchema = {
    name: {
      width: "w-full",
      className: "w-full",
      placeholder: "Enter Title",
      label: "Report/Assignment Title",
      labelAlign: "left",
      value: reportData.title,
      onChange: (e) => setReportData({ ...reportData, title: e.target.value }),
      type: "text",
      required: true,
    },
    description: {
      width: "w-full",
      className: "w-full",
      placeholder: "Enter Description",
      label: "Description",
      labelAlign: "left",
      value: reportData.description,
      onChange: (e) =>
        setReportData({ ...reportData, description: e.target.value }),
      type: "text",
      required: true,
    },
    dueDate: {
      width: "w-full",
      className: "w-full",
      placeholder: "Enter Due Date",
      label: "Due Date",
      labelAlign: "left",
      value: reportData.dueDate,
      onChange: (e) =>
        setReportData({ ...reportData, dueDate: e.target.value }),
      type: "date",
      required: true,
    },
    phase: {
      width: "w-full",
      className: "w-full",
      placeholder: "Select Phase",
      label: "Phase",
      labelAlign: "left",
      value: reportData.phase,
      onChange: (e) => setReportData({ ...reportData, phase: e.target.value }),
      type: "select",
      options: ["1", "2", "3", "4", "5", "6", "7"],
      required: true,
    },
    type: {
      width: "w-full",
      className: "w-full",
      placeholder: "Select Type",
      label: "Type",
      labelAlign: "left",
      value: reportData.type,
      onChange: (e) => setReportData({ ...reportData, type: e.target.value }),
      type: "select",
      options: ["Report", "Assignment"],
      required: true,
    },
    button: {
      text: "Add",
      type: "button",
      appearance: "filled",
      size: "md",
      color: "primary",
      className: "w-full",
    },
  };

  return (
    <SideLayout>
      <h1 className="text-2xl font-bold text-wider my-5 uppercase text-center">
        Add Report/Assignment
      </h1>
      <FormGenerator formSchema={AddReportSchema} onSubmit="" />
    </SideLayout>
  );
}
