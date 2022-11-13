/**
 *
 * Home
 *
 */
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/shared/Layout";
import { Tabs } from "../../components/shared/Tabs";
import { Card } from "../../components/shared/Card";
import { CustomButton } from "../../components/shared/CustomButton";
import { ReactComponent as HomeImage } from "../../assets/Home.svg";
import { HomePageInfoCard } from "../../components/HomePageInfoCard";
import { ReportSubmissonCard } from "../../components/ReportSubmissionCard";
import { PhasesData } from "./utils";
import { getReports } from "../../api/report";
import { getAssignments } from "../../api/assignment";

function ScheduleRow(props) {
	const [visible, hide] = useState(false);
	const { title, lastDate } = props;
	return (
		<>
			<div className='flex flex-wrap justify-between items-center w-11/12 mx-auto my-8'>
				<span className='text-xl md:text-2xl font-bold'>{title}</span>
				<span className='text-xl md:text-2xl font-medium'>{lastDate}</span>
				<CustomButton
					appearance='outlined'
					onClick={() => hide(true)}
					className='w-1/2 md:w-auto my-5'
				>
					Submit
				</CustomButton>
			</div>
			<ReportSubmissonCard
				submissionName={title}
				submissionType='report'
				visible={visible}
				hide={hide}
			></ReportSubmissonCard>
		</>
	);
}

export function StudentHome(props) {
	const [reportData, setReportData] = useState([]);
	const [assignmentData, setAssignmentData] = useState([]);

	useEffect(() => {
		(async () => {
			const reports = await getReports();
			const _reportData = reports.data.data.map((report) => {
				return {
					title: report.reportName,
					lastDate: report.date,
				};
			});
			setReportData(_reportData);
			const assignments = await getAssignments();
			const _assignmentData = assignments.data.data.map((assignment) => {
				return {
					title: assignment.assignmentName,
					lastDate: assignment.submissionDate,
				};
			});
			setAssignmentData(_assignmentData);
		})();
	}, []);

	return (
		<Layout>
			<div className='grid md:grid-cols-2 items-center justify-center'>
				{/* SVG */}
				<HomeImage className='w-5/6 lg:w-11/12 mx-auto' />
				<div>
					{/* HEADING */}
					<h1 className='font-bold text-4xl text-center'>Internship Program</h1>
					<p className='text-2xl my-4 text-center'>2021-2022</p>
				</div>
			</div>
			<div className='grid md:grid-cols-2 my-20'>
				{/* INFO CARDS */}
				<HomePageInfoCard
					heading='All your internship updates at one place.'
					color='secondary'
					link='/profile'
					buttonText='Visit Profile'
				/>
				<HomePageInfoCard
					heading='See previous year internships and contact them.'
					color='primary'
					link='/companies/current'
					buttonText='See Companies'
				/>
			</div>
			{/* SCHEDULE */}
			{/* <Card className='py-4 px-8 rounded-lg'>
				<Tabs shape='rounded' defaultKey='1'>
					{PhasesData?.map((phase, i) => (
						<Tabs.TabContent key={`${i + 1}`} title={phase.title}> */}
			{/* REPORT ROWS */}
			{/* {reportData.map((report, i) => (
								<ScheduleRow
									title={report.title}
									lastDate={report.lastDate}
									key={i}
								/>
							))}
						</Tabs.TabContent>
					))}
				</Tabs>
			</Card> */}
			<Card className='py-4 px-8 rounded-lg'>
				<Tabs shape='rounded' defaultKey='1'>
					<Tabs.TabContent key={1} title={"Reports"}>
						{/* REPORT ROWS */}
						{reportData.map((report, i) => (
							<ScheduleRow
								title={report.title}
								lastDate={report.lastDate}
								key={i}
							/>
						))}
					</Tabs.TabContent>
					<Tabs.TabContent key={2} title={"Assignments"}>
						{/* ASSIGNMENT ROWS */}
						{assignmentData.map((report, i) => (
							<ScheduleRow
								title={report.title}
								lastDate={report.lastDate}
								key={i}
							/>
						))}
					</Tabs.TabContent>
				</Tabs>
			</Card>
		</Layout>
	);
}
