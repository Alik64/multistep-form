import React from "react";

type Props = {
  step: number;
  title: string;
};

const SidebarTab = ({ step, title }: Props) => {
  return (
    <div>
      <div>{step}</div>
      <div>{title}</div>
    </div>
  );
};

export default SidebarTab;
