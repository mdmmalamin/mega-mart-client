import DailyEssentialsContainer from "./DailyEssentials";
import GrabTheBestDealOnSmartphonesContainer from "./GrabTheBestDealOnSmartphones";
import ShopFromTopCategoriesContainer from "./ShopFromTopCategories";
import TopElectronicsBrandsContainer from "./TopElectronicsBrands";

export const Home = () => {
  return (
    <>
      <GrabTheBestDealOnSmartphonesContainer />
      <ShopFromTopCategoriesContainer />
      <TopElectronicsBrandsContainer />
      <DailyEssentialsContainer />
    </>
  );
};
