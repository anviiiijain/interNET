/**
 *
 * AddReportDetails
 *
 */
import React, { useState } from "react";
import { FormGenerator } from "../components/shared/FormGenerator";
import { Layout } from "../components/shared/Layout";
import { addAssignment } from "../api/assignment";
import { addReport } from "../api/report";

export function AddReportDetails() {
	const [reportData, setReportData] = useState({
		title: "",
		description: "",
		submissionDate: "",
		phase: "",
		type: "",
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
			onChange: (e) => setReportData({ ...reportData, description: e }),
			type: "editor",
			required: true,
		},
		dueDate: {
			width: "w-full",
			className: "w-full",
			placeholder: "Enter Due Date",
			label: "Due Date",
			labelAlign: "left",
			value: reportData.submissionDate,
			onChange: (e) =>
				setReportData({ ...reportData, submissionDate: e.target.value }),
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
			onChange: (e) => {
				setReportData({ ...reportData, phase: e });
			},
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
			onChange: (e) => setReportData({ ...reportData, type: e }),
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

	const submitHandler = async (e) => {
		e.preventDefault();
		let res;
		let date = reportData.submissionDate.split("-");
		switch (reportData.type) {
			case "Report":
				res = await addReport({
					...reportData,
					reportName: reportData.title,
					submissionDate: date[2] + "/" + date[1] + "/" + date[0],
				});
				console.log(res);
				break;
			case "Assignment":
				res = await addAssignment({
					...reportData,
					assignmentName: reportData.title,
					submissionDate: date[2] + "/" + date[1] + "/" + date[0],
				});
				console.log(res);
				break;
			default:
				return;
		}
		setReportData({
			title: "",
			description: "",
			submissionDate: "",
			phase: "",
			type: "",
		});
	};

	return (
		<Layout>
			<h1 className='text-2xl font-bold text-wider my-5 uppercase text-center'>
				Add Report/Assignment
			</h1>
			<FormGenerator formSchema={AddReportSchema} onSubmit={submitHandler} />
		</Layout>
	);
}
