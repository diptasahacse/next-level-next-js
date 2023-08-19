import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const Dashboard = () => {
  return <div>
    Dashboard
  </div>;
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: React.ReactNode) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
