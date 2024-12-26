
import Container from "@/components/layouts/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ViewAll from "@/components/ui/ViewAll";

const GrabTheBestDealOnSmartphonesContainer = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between">
        <SectionTitle text="Grab The Best Deal On" colorText="Smartphones" />

        <ViewAll />
      </div>
      <hr />
    </Container>
  );
};

export default GrabTheBestDealOnSmartphonesContainer;