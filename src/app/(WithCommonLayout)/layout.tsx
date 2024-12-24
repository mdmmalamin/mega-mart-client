import FooterContainer from "@/components/shared/footer/FooterContainer";
import NavbarContainer from "@/components/shared/navbar/NavbarContainer";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavbarContainer />
      <main>{children}</main>
      <FooterContainer />
    </>
  );
};

export default layout;
