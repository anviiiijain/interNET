/**
 *
 * MentorDashboard
 *
 */
import React from "react";
import { ReactComponent as RightArrow } from "../../assets/rightarrow.svg";
import { PDFView } from "../../components/shared/PDFView";
import { CustomButton } from "../../components/shared/CustomButton";
import { Link } from "react-router-dom";
import { Layout } from "../../components/shared/Layout";
import { StatsCard } from "../../components/StatsCard";
import { stats } from "./utils";

export function MentorDashboard(props) {
  return (
    <Layout>
      <div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 justify-between">
          {/* stats */}
          {stats?.map(({ title, number }, i) => (
            <StatsCard title={title} number={number} key={i} />
          ))}
        </div>
        <div className="my-20">
          {/* recent submissions */}
          <h2 className="text-3xl text-light-gray">Recent Submissions</h2>
          <h3 className="text-2xl my-3 font-semibold text-table uppercase p-2">
            Title
          </h3>
          <div className="flex justify-between flex-wrap">
            <PDFView
              file={
                "https://raw.githubusercontent.com/anviiiijain/Portfolio-Anvi/master/src/Assets/Anvi_Jain_Resume.pdf"
              }
              name={"Anvi Jain"}
            />
          </div>
          <Link to="/all-submissions">
            <CustomButton size="xl" className="text-xl mx-auto mt-10">
              <span className="flex gap-2">
                View All
                <RightArrow className="" />
              </span>
            </CustomButton>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
