// app/register/page.jsx
import React from "react";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";

export const metadata = {
  title: "Register page",
  description: "description for Register page",
};
const Page = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default Page;
