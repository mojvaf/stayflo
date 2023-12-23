import React, { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default AuthLayout;
