import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p> this is navbar only dashboardd</p>
      {children}
    </div>
  );
};

export default layout;
