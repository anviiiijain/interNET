/**
 *
 * ReportSubmissonCard
 *
 */
import React, { ReactNode, useState } from "react";
import { Card } from "./shared/Card";
import { PickerDropPane } from "filestack-react";
import { FormGenerator } from "./shared/FormGenerator";
import { Modal } from "./shared/Modal";
import { submitReport } from "../api/report";
import { submitAssignment } from "../api/assignment";

//    submissionType?: 'report' | 'assignment';
//    note?: ReactNode;
//    submissionName: string;
//    visible: boolean;
//    hide: Function;

export function ReportSubmissonCard(props) {
	const { submissionType, note, submissionName, visible, hide } = props;
	const [reportformData, setReportFormData] = useState({
		days: "",
		hours: "",
	});
	const [submissionLink, setSubmissionLink] = useState("");

	const formSchema = {
		days: {
			label: "Total Internship days till now",
			width: "w-full",
			value: reportformData.days,
			onChange: (e) =>
				setReportFormData({ ...reportformData, days: e.target.value }),
			type: "number",
			required: true,
		},
		hours: {
			label: "Total Internship hours till now",
			width: "w-full",
			value: reportformData.hours,
			onChange: (e) =>
				setReportFormData({ ...reportformData, hours: e.target.value }),
			type: "number",
			required: true,
		},
		uploadbutton: {
			width: "w-full",
			text: "Upload report",
			type: "button",
			appearance: "outlined",
			size: "lg",
			onClick: (e) => {
				e.preventDefault();
				console.log(submissionName, "file submitted");
			},
			color: "primary",
		},
		submitbutton: {
			text: "Submit",
			type: "button",
			appearance: "filled",
			size: "xl",
			color: "secondary",
			className: "mx-auto",
		},
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		console.log("reportformdata home", reportformData);
		let res;
		switch (submissionType) {
			case "assignment":
				res = await submitAssignment({
					assignmentName: submissionName,
					submissionLink,
				});
				console.log(res);
				break;
			case "report":
				res = await submitReport({
					reportName: submissionName,
					submissionLink,
				});
				console.log(res);
				break;
			default:
				console.log("INVALID SUBMISSION TYPE");
		}
		setReportFormData({
			days: "",
			hours: "",
		});
	};

	return (
		<Modal
			height='h-auto'
			visible={visible}
			className='px-8 py-16 flex flex-col'
			hide={() => hide(false)}
		>
			{note && (
				<div>
					<h4>NOTE</h4>
					<div>{note}</div>
				</div>
			)}
			<FormGenerator
				formSchema={formSchema}
				onSubmit={onSubmit}
				formLayout='horizontal'
				gap='gap-y-8 md:gap-x-40'
			/>
			<PickerDropPane
				apikey='AVGvZUTB2ScWqdOD8Bjpqz' //API KEY
				onUploadDone={(res) => {
					setSubmissionLink(res.filesUploaded[0].url);
				}}
			/>
		</Modal>
	);
}
