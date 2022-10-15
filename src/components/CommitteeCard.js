/**
 *
 * CommitteeCard
 *
 */
import React from "react";
import { Card } from "./shared/Card";

export function CommitteeCard(props) {
  const { name, department, role, email } = props;
  return (
    <Card className="p-5 md:px-10 rounded-xl">
      <h3 className="text-xl md:text-2xl font-bold capitalize">{name}</h3>
      <h5 className="text-base md:text-lg text-text uppercase">{department}</h5>
      <h5 className="text-base md:text-lg text-primary font-bold capitalize mt-1">
        {role}
      </h5>
      <p className="m-0 text-base md:text-lg text-text">{email}</p>
    </Card>
  );
}
