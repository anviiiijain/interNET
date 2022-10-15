/**
 *
 * AllStudents
 *
 */
import { SideLayout } from "../../components/shared/SideLayout";
import { Table } from "../../components/shared/Table";
import React from "react";
import { studentColumns, studentData } from "./utils";

export function AllStudents(props) {
  return (
    <SideLayout>
      <Table
        columns={studentColumns}
        data={studentData}
        shadow={false}
        renderColumns
        divider
        headingDivider={false}
      />
    </SideLayout>
  );
}
