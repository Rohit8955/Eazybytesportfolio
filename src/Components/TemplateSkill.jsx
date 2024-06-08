import React from "react";

const TemplateSkill = ({skill,level}) => {
  return (
    <div className="flex gap-2   text-[14px]">
      <i className="fa-solid fa-circle-check text-black mt-1"></i>
      <div className="flex flex-col items-start">
        <h1 className="font-[600] text-black">{skill}</h1>
        <h1 className="text-[12px]">{level}</h1>
      </div>
    </div>
  );
};

export default TemplateSkill;
