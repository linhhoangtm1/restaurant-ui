import { useEffect } from "react";
import { useRouter } from "next/router";

export default function useRedirect(pathname: string) {
  const router = useRouter();

  useEffect(() => {
    router.push(pathname);
  }, [pathname]);
}
