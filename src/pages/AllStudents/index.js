/**
 *
 * AllStudents
 *
 */
import { Table } from "../../components/shared/Table";
import React, { useEffect, useState } from "react";
import { studentColumns, studentData } from "./utils";
import { Layout } from "../../components/shared/Layout";
import { getStudents } from "../../api/student";

export function AllStudents(props) {
	const [studentData, setStudentData] = useState([]);

	useEffect(() => {
		(async () => {
			const students = await getStudents();
			const _studentData = students.data.data.map((student, index) => {
				return {
					name: student.first_name + " " + student.last_name,
					class: student.section,
					enrollmentNo: student.enrollment_no,
					id: index + 1,
				};
			});
			setStudentData(_studentData);
			console.log(students.data.data);
		})();
	}, []);

	return (
		<Layout>
			<Table
				columns={studentColumns}
				data={studentData}
				shadow={false}
				renderColumns
				divider
				headingDivider={false}
			/>
		</Layout>
	);
}
