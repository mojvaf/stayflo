import React, { useEffect, useRef, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const useCheckAuth = () => {
  const [loadingFull, setLoadingFull] = useState<boolean>(true);
  const router = useRouter();
  const subabase = useRef(createClientComponentClient());

  useEffect(() => {
    subabase.current.auth.onAuthStateChange((event, session) => {
      setTimeout(() => {
        setLoadingFull(false);
      }, 1000);
      if (session) router.push("/dashboard");
    });
  }, []);
  return {
    loadingFull,
  };
};

export default useCheckAuth;
