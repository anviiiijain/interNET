/**
 *
 * ProfilePage
 *
 */
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/shared/Layout";
import { Avatar } from "../../components/shared/Avatar";
import { Card } from "../../components/shared/Card";
import { CustomButton } from "../../components/shared/CustomButton";
import { ProfileDetailsCard } from "../../components/ProfileDetailsCard";
import { AssignmentTable } from "../../components/AssignmentTable";
import { ReportsTable } from "../../components/ReportsTable";
import { history } from "../../history";
import {
  ProfileData,
  ProfileDetailColumns,
  InternshipData,
  InternshipDetailsColumns,
} from "./utils";

export function ProfilePage(props) {
  const { type } = useParams();
  const [visible, setVisible] = useState(type ? true : false);

  let InternshipData;

  let user = "admin";

  return (
    <>
      <Layout>
        {/* AVATAR */}
        <Avatar
          size="xxxxl"
          imageUrl="https://th.bing.com/th/id/OIP.wUbcHd3FuSC3j284yA1xVAHaKG?pid=ImgDet&rs=1"
          className="mx-auto my-8"
        />
        <div className="w-full grid xl:grid-cols-2 gap-5 lg:gap-16 my-10 mx-auto">
          {/* PERSONAL DETAILS */}
          <ProfileDetailsCard
            heading="Details"
            data={ProfileData}
            columns={ProfileDetailColumns}
          />
          {/* INTERNSHIP DETAILS */}
          {InternshipData ? (
            <ProfileDetailsCard
              heading="Internship Details"
              data={InternshipData}
              columns={InternshipDetailsColumns}
            />
          ) : (
            <Card className="rounded-2xl flex flex-column justify-center py-40 lg:py-0">
              <h2 className="text-2xl font-semibold text-center my-2">
                Internship Details
              </h2>
              {/* OPENS MODAL  TO FILL INTERNSHIP DETAILS */}
              <CustomButton
                size="lg"
                className="mx-auto px-8 py-3 rounded-2xl"
                onClick={() => {
                  history.push("/internshipDetails/1");
                }}
              >
                Upload Details
              </CustomButton>
            </Card>
          )}
        </div>
        {/* REPORT TABLE */}
        <Card width="w-full" className="mx-auto my-8 px-4 py-6 rounded-xl">
          <ReportsTable />
        </Card>
        {/* ASSIGNMENT TABLE */}
        <Card width="w-full" className="mx-auto my-8 px-4 py-6 rounded-xl">
          <AssignmentTable />
        </Card>
      </Layout>
      {/* INTERNSHIP DETAIL MODAL */}
      {/* <InternshipDetailModal
         visible={visible}
         hide={() => {
           setVisible(false);
           history.push('/profile');
         }}
         type={type}
       /> */}
    </>
  );
}
