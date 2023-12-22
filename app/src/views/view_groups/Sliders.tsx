import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { CardCount, ChoicesCount } from "../../db/slot_machine_db";

type DiscreteSliderProps = {
  onSelectCardNumber: (value: CardCount) => void;
  onSelectVariation: (value: ChoicesCount) => void;
  setCardCount: (value: CardCount) => void;
  setChoicesCount: (value: ChoicesCount) => void;
  cardCount: CardCount;
  choicesCount: ChoicesCount;
};

export const DiscreteSlider: React.FC<DiscreteSliderProps> = ({
  onSelectCardNumber,
  onSelectVariation,
  setCardCount,
  setChoicesCount,
  cardCount,
  choicesCount,
}) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 340 }}>
      <Typography color="text.primary" gutterBottom>
        Number Of Cards
      </Typography>
      <Slider
        onChangeCommitted={(_, value) => {
          onSelectCardNumber(value as CardCount);
          setCardCount(value as CardCount);
        }}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1 as CardCount}
        max={6 as CardCount}
        color="success"
        value={cardCount}
      />
      <Typography color="text.primary" gutterBottom>
        Number Of Variations
      </Typography>
      <Slider
        onChangeCommitted={(_, value) => {
          onSelectVariation(value as ChoicesCount);
          setChoicesCount(value as ChoicesCount);
        }}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1 as ChoicesCount}
        max={8 as ChoicesCount}
        color="success"
        value={choicesCount}
      />
    </Box>
  );
};
