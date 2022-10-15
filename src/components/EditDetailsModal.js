/**
 *
 * EditDetailsModal
 *
 */
import React, { useState } from "react";
import { FormGenerator } from "./shared/FormGenerator";
import { Modal } from "./shared/Modal";

//    visible: boolean;
//    hide: Function;
//    type: 'internship' | 'personal';

export function EditDetailsModal(props) {
  const { visible, hide, type } = props;
  const [personalData, setPersonalData] = useState({
    name: "",
    address: "",
    contact: "",
    stream: "",
    section: "",
    company: "",
    position: "",
    mentor: "",
  });
  const InternshipDetailsSchema = {};
  const PersonalDetailsSchema = {
    name: {
      width: "w-1/2",
      className: "w-1/2 align-self-center",
      placeholder: "Name",
      value: personalData.name,
      onChange: (e) =>
        setPersonalData({ ...personalData, name: e.target.value }),
      type: "text",
      required: true,
    },
    contact: {
      width: "w-1/2",
      className: "w-1/2 align-self-center",
      placeholder: "Contact",
      value: personalData.contact,
      onChange: (e) =>
        setPersonalData({ ...personalData, contact: e.target.value }),
      type: "text",
      required: true,
    },
    address: {
      width: "w-full",
      className: "w-1/2 align-self-center",
      placeholder: "Address",
      value: personalData.address,
      onChange: (e) =>
        setPersonalData({ ...personalData, address: e.target.value }),
      type: "text",
      required: true,
    },
    stream: {
      width: "w-1/2",
      className: "w-1/2 align-self-center",
      placeholder: "Stream",
      value: personalData.stream,
      onChange: (e) =>
        setPersonalData({ ...personalData, stream: e.target.value }),
      type: "text",
      required: true,
    },
    section: {
      width: "w-1/2",
      className: "w-1/2 align-self-center",
      placeholder: "Section",
      value: personalData.section,
      onChange: (e) =>
        setPersonalData({ ...personalData, section: e.target.value }),
      type: "text",
      required: true,
    },
    company: {
      width: "w-full",
      className: "w-1/2 align-self-center",
      placeholder: "Company",
      value: personalData.company,
      onChange: (e) =>
        setPersonalData({ ...personalData, company: e.target.value }),
      type: "text",
      required: true,
    },
    position: {
      width: "w-1/2",
      className: "w-1/2 align-self-center",
      placeholder: "Position",
      value: personalData.position,
      onChange: (e) =>
        setPersonalData({ ...personalData, position: e.target.value }),
      type: "text",
      required: true,
    },
    mentor: {
      width: "w-1/2",
      className: "w-1/2 align-self-center",
      placeholder: "Mentor",
      value: personalData.mentor,
      onChange: (e) =>
        setPersonalData({ ...personalData, mentor: e.target.value }),
      type: "text",
      required: true,
    },
    button: {
      text: "Update",
      type: "button",
      appearance: "filled",
      size: "md",
      color: "primary",
      className: "",
    },
  };
  return (
    <Modal
      visible={visible}
      hide={hide}
      height="h-auto"
      className="overflow-auto px-8 py-4"
    >
      {type === "personal" ? (
        <FormGenerator
          formHeading="Update Personal Details"
          formSchema={PersonalDetailsSchema}
          onSubmit=""
        />
      ) : (
        <FormGenerator formSchema={InternshipDetailsSchema} onSubmit="" />
      )}
    </Modal>
  );
}
