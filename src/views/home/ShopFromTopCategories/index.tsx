import Container from "@/components/layouts/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ViewAll from "@/components/ui/ViewAll";
import CategoryCard from "./CategoryCard";

const ShopFromTopCategoriesContainer = () => {
  return (
    <Container>
      <div className="flex items-center justify-between border-b my-10">
        <SectionTitle text="Shop From" colorText="Top Categories" />

        <ViewAll />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-7 justify-items-center gap-4 mt-4">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </Container>
  );
};

export default ShopFromTopCategoriesContainer;
