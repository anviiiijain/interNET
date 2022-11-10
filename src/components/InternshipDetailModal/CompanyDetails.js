import React, { useState } from "react";
import { addCompany } from "../../api/student";
import { FormGenerator } from "../shared/FormGenerator";
import { useNavigate } from "react-router";

export function CompanyDetails(props) {
	const navigate = useNavigate();
	console.log("PROPS", props);
	const [companyData, setCompanyData] = useState({
		companyName: "",
		registrationNo: "",
		address: "",
		city: "",
		state: "",
		contactNoPrimary: "",
		contactNoSecondary: "",
		email: "",
		websiteUrl: "",
		status: "current",
	});
	const CompanyFormSchema = {
		companyName: {
			width: "w-1/2",
			placeholder: "Company Name",
			value: companyData.companyName,
			onChange: (e) =>
				setCompanyData({ ...companyData, companyName: e.target.value }),
			type: "text",
			required: true,
		},
		registrationNo: {
			width: "w-1/2",
			placeholder: "registration number",
			value: companyData.registrationNo,
			onChange: (e) =>
				setCompanyData({ ...companyData, registrationNo: e.target.value }),
			type: "text",
			required: true,
		},
		address: {
			width: "w-full",
			placeholder: "Address",
			value: companyData.address,
			onChange: (e) =>
				setCompanyData({ ...companyData, address: e.target.value }),
			type: "text",
			required: true,
		},
		city: {
			width: "w-1/2",
			placeholder: "City",
			value: companyData.city,
			onChange: (e) => setCompanyData({ ...companyData, city: e.target.value }),
			type: "text",
			required: true,
		},
		state: {
			width: "w-1/2",
			placeholder: "State",
			value: companyData.state,
			onChange: (e) =>
				setCompanyData({ ...companyData, state: e.target.value }),
			type: "text",
			required: true,
		},
		contactNoPrimary: {
			width: "w-1/2",
			placeholder: "Contact Number",
			value: companyData.contactNoPrimary,
			onChange: (e) =>
				setCompanyData({ ...companyData, contactNoPrimary: e.target.value }),
			type: "text",
			required: true,
		},
		contactNoSecondary: {
			width: "w-1/2",
			placeholder: "Contact Number(optional)",
			value: companyData.contactNoSecondary,
			onChange: (e) =>
				setCompanyData({ ...companyData, contactNoSecondary: e.target.value }),
			type: "text",
			required: false,
		},
		email: {
			width: "w-1/2",
			placeholder: "Email",
			value: companyData.email,
			onChange: (e) =>
				setCompanyData({ ...companyData, email: e.target.value }),
			type: "email",
			required: true,
		},
		websiteUrl: {
			width: "w-1/2",
			placeholder: "Website url (if any)",
			value: companyData.websiteUrl,
			onChange: (e) =>
				setCompanyData({ ...companyData, websiteUrl: e.target.value }),
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

	const onSubmit = async (e) => {
		e.preventDefault();
		const res = await addCompany(companyData);
		console.log(res);
		console.log("SETCOMPANYID", props);
		// setCompanyId(res.data.companyId);
		// setCompanyData({
		// 	companyName: "",
		// 	registrationNo: "",
		// 	address: "",
		// 	city: "",
		// 	state: "",
		// 	contactNoPrimary: "",
		// 	contactNoSecondary: "",
		// 	email: "",
		// 	websiteUrl: "",
		// 	status: "current",
		// });
		// navigate("/internshipDetails/2");
	};

	return (
		<>
			<h2 className='text-2xl font-bold tracking-wider text-center my-5'>
				Company Details
			</h2>
			<FormGenerator
				formLayout='inline'
				formSchema={CompanyFormSchema}
				onSubmit={onSubmit}
			/>
		</>
	);
}
