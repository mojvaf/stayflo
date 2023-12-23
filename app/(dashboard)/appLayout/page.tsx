import React from "react";
import styles from "./applayout.module.css";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutButton from "@/app/components/logoutButton/LogoutButton";
import { redirect } from "next/navigation";

const AppLayout = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/login");
  }

  return (
    <div className={styles.app}>
      <h2>You are in the protected route!</h2>
      {data.session?.user && <p>{data.session.user.email}</p>}
      <LogoutButton />
    </div>
  );
};

export default AppLayout;
