/**
 *
 * AssignmentTable
 *
 */
import React, { useEffect, useState } from "react";
import cx from "classnames";
import { Table } from "./shared/Table";
import { getAssignments } from "../api/assignment";
import { ReportSubmissonCard } from "./ReportSubmissionCard";

const assignmentData = [
	{
		name: "1st Monthly Assignment",
		date: "25th Feb 2021",
		status: "Submitted",
		assignmentCTA: "View assignment",
	},
	{
		name: "2nd Monthly Assignment",
		date: "25th Mar 2021",
		status: "Pending",
		assignmentCTA: "View assignment",
	},
];
export function AssignmentTable(props) {
	const [assignmentData, setAssignmentData] = useState([]);
	const [visible, hide] = useState(false);

	const reportColumns = [
		{
			title: "Name",
			dataIndex: "assignmentName",
			key: "assignmentName",
			render: function (name) {
				return (
					<div className='text-lg lg:text-2xl font-medium text-text-light font-semibold'>
						{name}
					</div>
				);
			},
		},
		{
			title: "Date",
			dataIndex: "submissionDate",
			key: "submissionDate",
			render: function (date) {
				return (
					<div className='text-lg lg:text-2xl font-medium text-text'>
						{date}
					</div>
				);
			},
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			render: function (text) {
				return (
					<>
						{text && (
							<div
								className={cx(
									"w-32 lg:w-40 py-1 inline-flex text-sm  lg:text-base leading-5 font-semibold rounded-full text-white",
									{
										"bg-success": text.toLowerCase() === "submitted",
										"bg-red-500": text.toLowerCase() === "pending",
									},
								)}
							>
								<span className='mx-auto'>{text.toUpperCase()}</span>
							</div>
						)}
					</>
				);
			},
		},
		{
			title: "Report",
			dataIndex: "status",
			key: "status",
			render: function (text) {
				return (
					<>
						{text && (
							<>
								<button
									className={cx("text-lg lg:text-2xl font-semibold underline", {
										"text-primary": text.toLowerCase() === "submitted",
										"text-gray-800": text.toLowerCase() === "pending",
									})}
									onClick={() => hide(true)}
								>
									{text === "Submitted" ? "View Report" : "Upload"}
								</button>
								<ReportSubmissonCard
									submissionName={assignmentData.assignmentName}
									submissionType='assignment'
									visible={visible}
									hide={hide}
								></ReportSubmissonCard>
							</>
						)}
					</>
				);
			},
		},
	];

	useEffect(() => {
		(async () => {
			const assignments = await getAssignments();
			setAssignmentData(assignments.data.data);
		})();
	}, []);

	return (
		<>
			<h3 className='text-text font-semibold text-3xl mb-8 px-8'>
				Assignments
			</h3>

			<Table columns={reportColumns} data={assignmentData} shadow={false} />
		</>
	);
}
