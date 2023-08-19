import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import RootLayout from "../../components/layouts/RootLayout";

const Dashboard = () => {
  return <div>Dashboard Page</div>;
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: React.ReactNode) {
  <DashboardLayout>{page}</DashboardLayout>;
};
// Dashboard.getLayout = function getLayout(page: React.ReactNode) {
//   return <RootLayout>{page}</RootLayout>;
// };