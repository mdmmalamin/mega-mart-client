"use client";

import Container from "@/components/layouts/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ViewAll from "@/components/ui/ViewAll";
import SmartphoneCard from "./SmartphoneCard";

const GrabTheBestDealOnSmartphonesContainer = () => {
  return (
    <Container>
      <div className="flex items-center justify-between border-b my-10">
        <SectionTitle text="Grab The Best Deal On" colorText="Smartphones" />

        <ViewAll />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-4 mt-4">
        <SmartphoneCard />
        <SmartphoneCard />
        <SmartphoneCard />
        <SmartphoneCard />
        <SmartphoneCard />
      </div>
    </Container>
  );
};

export default GrabTheBestDealOnSmartphonesContainer;
