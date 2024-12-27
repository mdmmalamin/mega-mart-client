import Container from "@/components/layouts/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ViewAll from "@/components/ui/ViewAll";

const ShopFromTopCategoriesContainer = () => {
  return (
    <Container>
      <div className="flex items-center justify-between border-b">
        <SectionTitle text="Shop From" colorText="Top Categories" />

        <ViewAll />
      </div>
    </Container>
  );
};

export default ShopFromTopCategoriesContainer;