import Container from "@/components/layouts/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ViewAll from "@/components/ui/ViewAll";

const TopElectronicsBrandsContainer = () => {
  return (
    <Container>
      <div className="flex items-center justify-between border-b my-10">
        <SectionTitle text="Top" colorText="Electronics Brands" />

        <ViewAll />
      </div>
    </Container>
  );
};

export default TopElectronicsBrandsContainer;
