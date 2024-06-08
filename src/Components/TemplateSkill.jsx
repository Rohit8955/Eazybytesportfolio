import React from "react";

const TemplateSkill = ({skill,level}) => {
  return (
    <div className="flex flex-col text-[14px]">
      <div className="flex gap-3 items-center">
        <i className="fa-solid fa-circle-check text-black"></i>
        <h1 className="font-[600] text-black">{skill}</h1>
      </div>
      <h1 className="text-[12px]">{level}</h1>
    </div>
  );
};

export default TemplateSkill;
