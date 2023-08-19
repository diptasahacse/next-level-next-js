import React from "react";
import RootLayout from "@/components/layouts/RootLayout";

const Contact = () => {
  return <div>Contact Page</div>;
};

export default Contact;
Contact.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
