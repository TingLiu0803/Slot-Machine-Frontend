import { Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { RandomIcons } from "../view_elements/RandomIcons";
import { GameSetting } from "../../db/slot_machine_db";

type CenterBoard = {
  gameSetting: GameSetting;
  className?: string;
};

export const CenterBoard: React.FC<CenterBoard> = ({
  gameSetting,
  className = "",
}) => {
  return (
    <Grid className={`flex justify-center ${className}`}>
      {gameSetting.cardsIndex.map((value: number, index: number) => (
        <Grid key={index} className="2xl:mx-10 mx-2">
          <Card
            className="flex flex-row items-center justify-center 
            bg-dark-gray shadow-xl rounded-lg
            sm:w-40 2xl:w-48 w-24 2xl:mt-0 mt-2 sm:h-48 2xl:h-72 h-32 mb-2"
          >
            <RandomIcons
              iconKind={value}
              className="text-gray-300 sm:text-5xl 2xl:text-6xl"
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
