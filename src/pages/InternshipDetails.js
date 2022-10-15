/**
 *
 * InternshipDetails
 *
 */
import { InternshipDetailModal } from "../components/InternshipDetailModal";
import { Layout } from "../components/shared/Layout";
import React from "react";

export function InternshipDetails(props) {
  return (
    <Layout>
      <InternshipDetailModal type="1" />
    </Layout>
  );
}
