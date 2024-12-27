import Container from "@/components/layouts/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ViewAll from "@/components/ui/ViewAll";

const DailyEssentialsContainer = () => {
  return (
    <Container>
      <div className="flex items-center justify-between border-b">
        <SectionTitle text="Daily" colorText="Essentials" />

        <ViewAll />
      </div>
    </Container>
  );
};

export default DailyEssentialsContainer;
