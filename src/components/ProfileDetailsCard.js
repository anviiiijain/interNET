/**
 *
 * ProfileDetailsCard
 *
 */
import React, { useState } from "react";
import { Card } from "./shared/Card";
import { EditDetailsModal } from "./EditDetailsModal";
import { ReactComponent as EditIcon } from "./../assets/EditIcon.svg";

export function ProfileDetailsCard(props) {
  const { data, columns, heading } = props;
  const [visible, setVisible] = useState(false);
  const type = heading === "Details" ? "personal" : "internship";
  return (
    <>
      <Card className="px-12 pt-16 pb-6 rounded-2xl">
        <div className="flex justify-between items-start mb-6">
          {/* HEADING */}
          <h3 className="text-text font-semibold text-3xl">{heading}</h3>
          {/* EDIT ICON OPENS MODAL*/}
          <span className="text-blue-500 cursor-pointer">
            <EditIcon
              onClick={() => {
                setVisible(true);
              }}
            />
          </span>
        </div>
        {/* INFORMATION */}
        {columns?.map((column) => (
          <div className="flex justify-between my-3 gap-10">
            <span className="text-text-light font-bold text-xl min-w-max">
              {column.key.charAt(0).toUpperCase()}
              {column.key.slice(1)}
            </span>
            <span className="text-text font-medium text-xl text-right">
              {column.render(data)}
            </span>
          </div>
        ))}
      </Card>
      <EditDetailsModal
        type={type}
        visible={visible}
        hide={() => {
          setVisible(false);
        }}
      />
    </>
  );
}
