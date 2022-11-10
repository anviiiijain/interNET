/**
 *
 * LoginPage
 *
 */
import React, { useEffect, useState } from "react";
import jwt from "jwt-decode";
import { Card } from "../components/shared/Card";
import { FormGenerator } from "../components/shared/FormGenerator";
import { ReactComponent as Login } from "../assets/Login.svg";
import { useNavigate } from "react-router-dom";

import { login } from "../api/auth";
import { ACCESS_TOKEN_KEY } from "../constants/accessTokenKey";

export function LoginPage(props) {
	const navigate = useNavigate();

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [role, setRole] = useState(null);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const formSchema = {
		email: {
			width: "w-full",
			placeholder: "Email",
			value: formData.email,
			onChange: (e) => setFormData({ ...formData, email: e.target.value }),
			type: "email",
			label: "Email",
			required: true,
		},
		password: {
			width: "w-full",
			placeholder: "Password",
			value: formData.password,
			onChange: (e) => setFormData({ ...formData, password: e.target.value }),
			type: "password",
			label: "Password",
			required: true,
		},
		button: {
			text: "Login",
			type: "button",
			appearance: "filled",
			size: "md",
			color: "primary",
			className: "mx-auto w-24",
		},
	};

	useEffect(() => {
		if (role === "admin") {
			navigate("/mentor-dashboard");
		} else if (role === "student") {
			navigate("/");
		} else {
			navigate("/login");
		}
	}, [role, navigate]);

	const onSubmit = async (e) => {
		e?.preventDefault();
		const res = await login(formData);
		const token = res.data.data.accessToken;
		localStorage.setItem(ACCESS_TOKEN_KEY, token);
		setIsLoggedIn(true);
		setRole(jwt(token).role);
	};

	return (
		<div className='md:grid grid-cols-3 lg:grid-cols-2 w-screen h-screen items-center'>
			<div className='hidden md:block'>
				<Login />
			</div>
			<div className='bg-primary col-span-2 lg:col-span-1 h-full flex items-center justify-center'>
				<Card
					shadow='shadow-none'
					width='w-11/12 md:w-2/3 xl:w-1/2'
					height='h-auto'
					className='px-4 py-8 sm:px-8 sm:py-16 rounded-2xl'
				>
					<FormGenerator
						formSchema={formSchema}
						onSubmit={onSubmit}
						gap='gap-y-2 md:gap-y-4'
					/>
				</Card>
			</div>
		</div>
	);
}
