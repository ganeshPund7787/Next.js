import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 bg-white flex flex-col">
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
