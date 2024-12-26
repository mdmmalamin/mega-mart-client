import Container from "@/components/layouts/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ViewAll from "@/components/ui/ViewAll";

const TopElectronicsBrandsContainer = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between">
        <SectionTitle text="Top" colorText="Electronics Brands" />

        <ViewAll />
      </div>
      <hr />
    </Container>
  );
};

export default TopElectronicsBrandsContainer;
