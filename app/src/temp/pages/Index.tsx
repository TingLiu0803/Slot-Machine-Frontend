import { Header } from "../views/Header";
import { HelpButton } from "../views/HelpButton";
import { InformationText } from "../views/InformationText";
import { MainLayout } from "../views/MainLayout";
import { RentDetails } from "../views/RentDetails";

export const Index: React.FC = () => {
  return (
    <MainLayout>
      <Header />
      <InformationText />
      <RentDetails />
      <HelpButton />
    </MainLayout>
  );
};
