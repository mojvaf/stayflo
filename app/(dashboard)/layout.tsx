import React, { ReactNode } from "react";
import Footer from "../components/footer/Footer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default DashboardLayout;
