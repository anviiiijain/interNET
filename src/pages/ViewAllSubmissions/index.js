/**
 *
 * ViewAllReport
 *
 */
import React from "react";
import { Layout } from "../../components/shared/Layout";
import { PDFView } from "../../components/shared/PDFView";
import { SubmissionsData } from "./utils";

export function ViewAllSubmissions(props) {
  return (
    <Layout>
      <h1 className="text-2xl text-light-gray text-center mb-8">
        All Submissions
      </h1>
      {SubmissionsData &&
        SubmissionsData?.map((item) => (
          <>
            <h2 className="my-3 text-3xl font-semibold text-table uppercase p-2">
              {item.title}
            </h2>
            <div className="flex justify-start flex-wrap gap-y-6 my-6">
              {item.submissions ? (
                item.submissions?.map((submission) => (
                  <PDFView
                    file={submission.fileLink}
                    name={submission.studentName}
                  />
                ))
              ) : (
                <span>No Submissions yet</span>
              )}
            </div>
          </>
        ))}
    </Layout>
  );
}
