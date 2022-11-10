/**
 *
 * InternshipDetailModal
 *
 */
import React, { useState } from "react";
import { Tabs } from "../shared/Tabs";
import { CompanyDetails } from "./CompanyDetails";
import { ExternalDetails } from "./ExternalDetails";
import { InternshipDetails } from "./InternshipDetails";

export function InternshipDetailModal(props) {
	const [companyId, setCompanyId] = useState("");

	const { type } = props;
	return (
		<div className='w-2/3 mx-auto my-10'>
			<Tabs position='center' shape='circle' defaultKey={type || "1"}>
				<Tabs.TabContent key='1' title='A' route='/internshipDetails/1'>
					<CompanyDetails setCompanyId={setCompanyId} />
				</Tabs.TabContent>
				{/* <Tabs.TabContent key='2' title='B' route='/internshipDetails/2'>
					<ExternalDetails />
				</Tabs.TabContent> */}
				<Tabs.TabContent key='2' title='B' route='/internshipDetails/2'>
					<InternshipDetails companyId={companyId} />
				</Tabs.TabContent>
			</Tabs>
		</div>
	);
}
