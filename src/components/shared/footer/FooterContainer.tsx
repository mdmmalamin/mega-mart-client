import Container from "@/components/layouts/Container";
import FooterContactUs from "./FooterContactUs";
import AllRightsReserved from "./AllRightsReserved";
import FooterListItems from "./FooterListItems";
import { customerServicesLinks, mostPopularCategoriesLinks } from "@/constants";
import Image from "next/image";
import mask_circle from "@/assets/images/footer/mask-circle.png";

const FooterContainer = () => {
  return (
    <footer className="bg-primary text-white text-nowrap capitalize pt-20 relative z-50">
      <Image
        alt=""
        src={mask_circle}
        className="absolute right-0 top-0 -z-10"
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <FooterContactUs />
          <FooterListItems
            title="Most Popular Categories"
            links={mostPopularCategoriesLinks}
          />
          <FooterListItems
            title="Customer Services"
            links={customerServicesLinks}
          />
        </div>

        <AllRightsReserved />
      </Container>
    </footer>
  );
};

export default FooterContainer;
