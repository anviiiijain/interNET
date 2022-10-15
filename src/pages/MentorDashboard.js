/**
 *
 * MentorDashboard
 *
 */
import { Card } from "../components/shared/Card";
import { SideLayout } from "../components/shared/SideLayout";
import React from "react";
import { ReactComponent as RightArrow } from "../assets/rightarrow.svg";
import { PDFView } from "../components/shared/PDFView";
import { CustomButton } from "../components/shared/CustomButton";
import { Link } from "react-router-dom";

export function MentorDashboard(props) {
  return (
    <SideLayout>
      <div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 justify-between">
          {/* stats */}
          <Card className="p-4 rounded-card" shadow="shadow-2xl">
            <div className="flex items-center justify-evenly">
              <div className="text-3xl w-1/2">Number of Students</div>
              <div className="bg-yellow-200 w-40 h-40 rounded-full flex items-center justify-center">
                <div className="bg-white w-34 h-34 rounded-full p-2 flex items-center justify-center">
                  <div className="bg-white w-28 h-28 rounded-full flex items-center justify-center text-3xl font-medium shadow-lg">
                    234
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-4 rounded-card" shadow="shadow-2xl">
            <div className="flex gap-5 items-center">
              <div className="text-3xl w-1/2">Number of Companies</div>
              <div className="bg-yellow-200 w-40 h-40 rounded-full flex items-center justify-center">
                <div className="bg-white w-34 h-34 rounded-full p-2 flex items-center justify-center">
                  <div className="bg-white w-28 h-28 rounded-full flex items-center justify-center text-3xl font-medium shadow-lg">
                    234
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-4 rounded-card" shadow="shadow-2xl">
            <div className="flex items-center justify-evenly">
              <div className="text-3xl w-1/2">Assignments Posted</div>
              <div className="bg-yellow-200 w-40 h-40 rounded-full flex items-center justify-center">
                <div className="bg-white w-34 h-34 rounded-full p-2 flex items-center justify-center">
                  <div className="bg-white w-28 h-28 rounded-full flex items-center justify-center text-3xl font-medium shadow-lg">
                    234
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-4 rounded-card" shadow="shadow-2xl">
            <div className="flex gap-5 items-center">
              <div className="text-3xl w-1/2">Number of Submissions</div>
              <div className="bg-yellow-200 w-40 h-40 rounded-full flex items-center justify-center">
                <div className="bg-white w-34 h-34 rounded-full p-2 flex items-center justify-center">
                  <div className="bg-white w-28 h-28 rounded-full flex items-center justify-center text-3xl font-medium shadow-lg">
                    234
                  </div>
                </div>
              </div>
            </div>
          </Card>
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
    </SideLayout>
  );
}
