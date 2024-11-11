import React from "react";

const page = ({ params }: { params: { id: String } }) => {
  const { id } = params;
  return <div className="text-3xl">User Profile : {id}</div>;
};

export default page;
