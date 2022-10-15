/**
 *
 * AssignmentTable
 *
 */
import React from "react";
import cx from "classnames";
import { Table } from "./shared/Table";

const assignmentData = [
  {
    name: "1st Monthly Assignment",
    date: "25th Feb 2021",
    status: "Submitted",
    assignmentCTA: "View assignment",
  },
  {
    name: "2nd Monthly Assignment",
    date: "25th Mar 2021",
    status: "Pending",
    assignmentCTA: "View assignment",
  },
];
export function AssignmentTable(props) {
  const reportColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: function (name) {
        return (
          <div className="text-lg lg:text-2xl font-medium text-text-light font-semibold">
            {name}
          </div>
        );
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: function (date) {
        return (
          <div className="text-lg lg:text-2xl font-medium text-text">
            {date}
          </div>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: function (text) {
        return (
          <>
            {text && (
              <div
                className={cx(
                  "w-32 lg:w-40 py-1 inline-flex text-sm  lg:text-base leading-5 font-semibold rounded-full text-white",
                  {
                    "bg-success": text.toLowerCase() === "submitted",
                    "bg-red-500": text.toLowerCase() === "pending",
                  }
                )}
              >
                <span className="mx-auto">{text.toUpperCase()}</span>
              </div>
            )}
          </>
        );
      },
    },
    {
      title: "Report",
      dataIndex: "assignmentCTA",
      key: "assignmentCTA",
      render: function (text) {
        return (
          <>
            {text && (
              <a
                className={cx("text-lg lg:text-2xl font-semibold underline", {
                  "text-primary": text.toLowerCase() === "view assignment",
                  "text-gray-800": text.toLowerCase() === "upload assignment",
                })}
                href="/"
              >
                {text}
              </a>
            )}
          </>
        );
      },
    },
  ];
  return (
    <>
      <h3 className="text-text font-semibold text-3xl mb-8 px-8">
        Assignments
      </h3>
      <Table columns={reportColumns} data={assignmentData} shadow={false} />
    </>
  );
}
