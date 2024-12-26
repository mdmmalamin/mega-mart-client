import FooterContainer from "@/components/shared/footer/FooterContainer";
import NavbarContainer from "@/components/shared/navbar/NavbarContainer";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavbarContainer />
      <main className="space-y-[120px] my-[120px]">{children}</main>
      <FooterContainer />
    </>
  );
};

export default layout;
