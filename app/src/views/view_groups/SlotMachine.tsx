import { SlotMachineController } from "../../controllers/SlotMachineController";
import { ButtonGroupLayout } from "../../layout/ButtonGroupLayout";
import { CenterBoardLayout } from "../../layout/CenterBoardLayout";

export const SlotMachine: React.FC<SlotMachineController> = ({
  gameSetting,
  gameHandlers,
  tutorialmodalHandlers,
}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-4">
      <h1>
        <span className="md:text-4xl text-2xl text-gray-800 md:mr-4 mr-2">
          Play to win
        </span>
        <span className="md:text-6xl text-2xl  text-gray-900 font-bold">
          Tokens
        </span>
      </h1>
      <CenterBoardLayout gameSetting={gameSetting} />
      <div className="sm:mb-4 md:mb-10">
        <ButtonGroupLayout
          tutorialmodalHandlers={tutorialmodalHandlers}
          gameHandlers={gameHandlers}
          gameSetting={gameSetting}
        />
      </div>
    </main>
  );
};
