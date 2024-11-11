import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard User</h1>
      <ul className="mt-10">
        <li>
          <Link href="/dashboard/user/1"> User 1</Link>
        </li>
        <li>
          <Link href="/dashboard/user/2"> User 2</Link>
        </li>
        <li>
          <Link href="/dashboard/user/3"> User 3</Link>
        </li>
        <li>
          <Link href="/dashboard/user/4"> User 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
