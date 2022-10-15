/**
 *
 * HomePageInfoCard
 *
 */
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import { Card } from "./shared/Card";
import { CustomButton } from "./shared/CustomButton";

//    heading: ReactNode;
//    buttonText: string;
//    link: string;
//    color: 'primary' | 'secondary';
//    className?: string;

export function HomePageInfoCard(props) {
  const { heading, buttonText, link, color, className } = props;

  const classes = cx(
    {
      "text-primary": color === "primary",
      "text-secondary bg-background": color === "secondary",
    },
    "text-center py-20 rounded-none",
    className
  );

  return (
    <Card shadow="shadow-none" className={classes}>
      <h3 className="font-semibold text-3xl leading-10 w-2/3 mx-auto mb-10">
        {heading}
      </h3>
      <Link to={link}>
        <CustomButton
          color={color}
          appearance="outlined"
          className="mx-auto font-bold"
        >
          {buttonText}
        </CustomButton>
      </Link>
    </Card>
  );
}
