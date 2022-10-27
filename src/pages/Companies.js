/**
 *
 * Companies
 *
 */
import React from "react";
import { useParams } from "react-router";
import { Layout } from "../components/shared/Layout";
import { CustomButton } from "../components/shared/CustomButton";
import { CompanyCard } from "../components/CompanyCard";

export function Companies(props) {
  const data = [];

  const { company } = useParams();

  return (
    <Layout>
      {/* HEADING */}
      {company === "previous" ? (
        <h2 className="text-2xl md:text-3xl font-bold text-center my-10">
          Previous Companies
        </h2>
      ) : (
        <h2 className="text-2xl md:text-3xl font-bold text-center my-10">
          Current Companies
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-x-24 xl:mx-auto">
        {data?.map((companyDetails, i) => (
          <CompanyCard
            key={i}
            companyName={companyDetails.companyName}
            city={companyDetails.city}
            contact={companyDetails.contactNoPrimary}
            branches={companyDetails.city}
          />
        ))}
      </div>
      <CustomButton
        size="lg"
        color="secondary"
        appearance="outlined"
        className="mx-auto mt-20"
      >
        See More
      </CustomButton>
    </Layout>
  );
}
