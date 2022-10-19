/**
 *
 * AllStudents
 *
 */
import { Table } from "../../components/shared/Table";
import React from "react";
import { studentColumns, studentData } from "./utils";
import { Layout } from "../../components/shared/Layout";

export function AllStudents(props) {
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
