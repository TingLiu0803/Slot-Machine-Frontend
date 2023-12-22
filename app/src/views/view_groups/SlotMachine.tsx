import { Button } from "@mui/material";
import { SlotMachineController } from "../../controllers/SlotMachineController";
import { ButtonGroupLayout } from "../../layout/ButtonGroupLayout";
import { CenterBoard } from "./CenterBoard";
import StarIcon from "@mui/icons-material/Star";
import { DiscreteSlider } from "./Sliders";

export const SlotMachine: React.FC<SlotMachineController> = ({
  gameSetting,
  gameHandlers,
  tutorialmodalHandlers,
}) => {
  const handleClickPlay = () => {
    if (gameSetting.tokenCount >= 10) {
      gameHandlers.onClickPlay();
    }
    if (gameSetting.tokenCount < 10) {
      window.location.reload();
    }
  };
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
      <CenterBoard gameSetting={gameSetting} />
      <DiscreteSlider
        onSelectCardNumber={gameHandlers.onSelectCardNumber}
        onSelectVariation={gameHandlers.onSelectVariation}
        setCardCount={gameHandlers.setCardCount}
        setChoicesCount={gameHandlers.setChoicesCount}
        cardCount={gameSetting.cardCount}
        choicesCount={gameSetting.choicesCount}
      />
      <div className="sm:mb-4 md:mb-10">
        <ButtonGroupLayout
          tutorialmodalHandlers={tutorialmodalHandlers}
          gameSetting={gameSetting}
          buttonOne={
            <Button
              variant="contained"
              size="large"
              color="success"
              className="bg-green-900"
              onClick={handleClickPlay}
            >
              {gameSetting.tokenCount >= 10 ? "Play!" : "Start Over?"}
            </Button>
          }
          buttonTwo={
            <Button variant="contained" disabled className="bg-yellow-900">
              <span>
                <StarIcon color="action" />
              </span>
              <span className="text-center text-lg px-2 pt-0.5">
                {gameSetting.tokenCount}
              </span>
            </Button>
          }
        />
      </div>
    </main>
  );
};
