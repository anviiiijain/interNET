/**
 *
 * ReportsTable
 *
 */
import React, { useEffect, useState } from "react";
import cx from "classnames";
import { Table } from "./shared/Table";
import { getReports } from "../api/report";
import { ReportSubmissonCard } from "./ReportSubmissionCard";

const reportData = [
	{
		name: "1st Fortnightly Report",
		date: "15th Feb 2021",
		status: "Submitted",
		reportCTA: "View report",
	},
	{
		name: "2nd Fortnightly Report",
		date: "1st Mar 2021",
		status: "Submitted",
		reportCTA: "View report",
	},
	{
		name: "3rd Fortnightly Report",
		date: "15th Mar 2021",
		status: "Pending",
		reportCTA: "Upload report",
	},
];

export function ReportsTable(props) {
	const [reportData, setReportData] = useState();
	const [visible, hide] = useState(false);

	const reportColumns = [
		{
			title: "Name",
			dataIndex: "reportName",
			key: "reportName",
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
			dataIndex: "date",
			key: "date",
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
			key: "statusAndName",
			render: function (text) {
				return (
					<>
						{text && (
							<>
								<button
									className={cx("text-lg lg:text-2xl font-semibold underline", {
										"text-primary": text.status.toLowerCase() === "submitted",
										"text-gray-800": text.status.toLowerCase() === "pending",
									})}
									onClick={() => {
										if (text.status === "Submitted")
											console.log("REDIRECT TO VIEW REPORT");
										else hide(true);
									}}
								>
									{text.status === "Submitted" ? "View Report" : "Upload"}
								</button>
								<ReportSubmissonCard
									submissionName={text.name}
									submissionType='report'
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
			const reports = await getReports();
			console.log("REPORTS", reports);
			const _reportsData = reports.data.data.map((report) => {
				return {
					...report,
					statusAndName: {
						status: report.status,
						name: report.reportName,
					},
				};
			});
			setReportData(_reportsData);
		})();
	}, []);

	return (
		<>
			<h3 className='text-text font-semibold text-3xl mb-8 px-8'>Reports</h3>
			<Table columns={reportColumns} data={reportData} shadow={false} />
		</>
	);
}
