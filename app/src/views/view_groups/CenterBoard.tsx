import { Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { RandomIcons } from "../view_elements/RandomIcons";
import { GameSetting } from "../../db/slot_machine_db";

type CenterBoard = {
  gameSetting: GameSetting;
};

export const CenterBoard: React.FC<CenterBoard> = ({ gameSetting }) => {
  return (
    <Grid className="flex">
      {gameSetting.cardsIndex.map((value: number, index: number) => (
        <Grid key={index} className="md:mx-10 mx-2">
          <Card
            className="flex flex-row items-center justify-center 
            bg-dark-gray shadow-xl rounded-lg
            sm:w-40 md:w-48 w-24 md:mt-0 mt-2 sm:h-48 md:h-72 h-32"
          >
            <RandomIcons iconKind={value} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
