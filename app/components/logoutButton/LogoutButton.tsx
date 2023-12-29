"use client";
import Button from "../button/Button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handelLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/login");
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <Button onClick={handelLogout} className="btn" type="submit" >
      Logout
    </Button>
  );
}
