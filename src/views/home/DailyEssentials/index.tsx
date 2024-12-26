import Container from "@/components/layouts/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ViewAll from "@/components/ui/ViewAll";

const DailyEssentialsContainer = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between">
        <SectionTitle text="Daily" colorText="Essentials" />

        <ViewAll />
      </div>
      <hr />
    </Container>
  );
};

export default DailyEssentialsContainer;
