/**
 *
 * CompanyCard
 *
 */
import React from "react";
import { Card } from "./shared/Card";
import { CustomButton } from "./shared/CustomButton";

export function CompanyCard(props) {
  const { companyName, city, contact, branches, link } = props;
  return (
    <Card className="w-1/6 rounded-lg">
      <div className="p-5 tracking-wider capitalize">
        <h3 className="font-bold text-xl">{companyName}</h3>
        <h5 className="font-semibold text-primary text-lg">{city}</h5>
        <p className="font-semibold text-gray-500 mt-2">{contact}</p>
        <h4 className="font-semibold text-lg mt-3">Branches:</h4>
        <p>{branches}</p>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <CustomButton
          color="primary"
          appearance="outlined"
          size="lg"
          className="w-full py-4 rounded-t-none border-b-0 border-l-0 border-r-0 text-primary"
        >
          See Website
        </CustomButton>
      </a>
    </Card>
  );
}
