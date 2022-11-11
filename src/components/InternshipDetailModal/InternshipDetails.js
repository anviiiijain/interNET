import React, { useState, useEffect } from "react";
import { FormGenerator } from "../shared/FormGenerator";
import { useNavigate } from "react-router";
import { addInternship } from "../../api/student";
import { getCompanies } from "../../api/company";

export function InternshipDetails() {
	const navigate = useNavigate();
	// const { hide } = props;
	const [companies, setCompanies] = useState([]);
	const [internshipData, setInternshipData] = useState({
		companyName: "",
		role: "",
		internshipType: "",
		mode: "",
		total_days: "",
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
		companyName: {
			width: "w-full",
			className: "w-1/2 align-self-center",
			placeholder: "Company Name",
			value: internshipData.companyName,
			onChange: (value) =>
				setInternshipData({ ...internshipData, companyName: value }),
			type: "select",
			options: companies.map((company) => company.companyName),
			required: true,
		},
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
		mode: {
			width: "w-full",
			className: "w-1/2 align-self-center",
			placeholder: "Mode of Internship",
			value: internshipData.mode,
			onChange: (value) =>
				setInternshipData({ ...internshipData, mode: value }),
			type: "select",
			options: ["online", "offline"],
			required: true,
		},
		days: {
			width: "w-full",
			className: "w-1/2 align-self-center",
			placeholder: "Duration",
			value: internshipData.total_days,
			onChange: (value) =>
				setInternshipData({
					...internshipData,
					total_days: value.target.value,
				}),
			type: "text",
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

	useEffect(() => {
		(async () => {
			const companyData = await getCompanies();
			console.log("COMPANY DATA", companyData);
			setCompanies(companyData.data.data);
		})();
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		const data = {
			...internshipData,
			paid: internshipData.internshipType === "paid" ? true : false,
			total_days: parseInt(internshipData.total_days),
		};
		const res = await addInternship(data);
		console.log("add internship response", res);
		setInternshipData({
			role: "",
			internshipType: "",
			mode: "",
			techStack: [],
		});
		navigate("/profile");
		// hide(false);
	};

	return (
		<div className='w-1/2 mx-auto'>
			<h2 className='text-2xl font-bold tracking-wider text-center my-5'>
				Internship Details
			</h2>
			<FormGenerator
				formLayout='inline'
				formSchema={InternshipFormSchema}
				onSubmit={onSubmit}
			/>
		</div>
	);
}
