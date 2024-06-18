import React from "react";
import FamilyName from "./FamilyName";

const ParentComponent = () => {
  return (
    <>
      <h1>Family Information</h1>
      <FamilyName name="Smith" />
    </>
  );
};

export default ParentComponent;
