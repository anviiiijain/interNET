/**
 *
 * ContactCommitteePage
 *
 */
import React from "react";
import { Layout } from "../../components/shared/Layout";
import { CommitteeCard } from "../../components/CommitteeCard";
import { CommitteeData } from "./utils";

export function ContactCommitteePage(props) {
  return (
    <Layout>
      <h2 className="text-2xl md:text-3xl font-bold text-center my-10">
        Internship Committee
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-2 xl:gap-10 3xl:gap-20 xl:px-10 3xl:px-52">
        {CommitteeData?.map((member, i) => (
          <CommitteeCard
            key={i}
            name={member.name}
            department={member.department}
            email={member.email}
            role={member.role}
          />
        ))}
      </div>
    </Layout>
  );
}
