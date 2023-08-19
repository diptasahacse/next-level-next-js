import React from "react";
import RootLayout from "@/components/layouts/RootLayout";

const About = () => {
  return <div>About page 1</div>;
};

export default About;
About.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
