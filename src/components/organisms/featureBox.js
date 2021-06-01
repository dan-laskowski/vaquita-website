import React from "react";
import Feature from "../molecules/feature";

const FeatureBox = ({ features }) => {
  return (
    <>
      {features.map(({ heading, paragraph }) => (
        <Feature heading={heading} paragraph={paragraph} />
      ))}
    </>
  );
};

export default FeatureBox;
