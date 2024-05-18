"use client";
import Button from "@/components/Button/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function BlogDetailsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const router = useRouter();

  const redirect = () => {
    // router.push("/blogs");
    router.push("/blogs", { scroll: true });
  };

  return (
    <>
      <div className="ml-12">
        <Button onClick={redirect} name="Back" />
      </div>
      <section className="">
        {/* Include shared UI here e.g. a header or sidebar*/}

        {children}
      </section>
    </>
  );
}
