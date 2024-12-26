import Container from "@/components/layouts/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ViewAll from "@/components/ui/ViewAll";

const ShopFromTopCategoriesContainer = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between">
        <SectionTitle text="Shop From" colorText="Top Categories" />

        <ViewAll />
      </div>
      <hr />
    </Container>
  );
};

export default ShopFromTopCategoriesContainer;