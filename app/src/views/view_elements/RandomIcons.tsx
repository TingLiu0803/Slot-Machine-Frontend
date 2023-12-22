import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import PetsIcon from "@mui/icons-material/Pets";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import StarIcon from "@mui/icons-material/Star";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CloudIcon from "@mui/icons-material/Cloud";

enum IconKind {
  PET,
  HAPPY_FACE,
  STAR,
  SUN,
  MOON,
  SNOWFLAKE,
  CLOUD,
  THUMBS_UP,
}

type RandomIcons = {
  iconKind: number;
  className?: string;
};

export const RandomIcons: React.FC<RandomIcons> = ({ iconKind, className }) => {
  switch (iconKind) {
    case IconKind.PET:
      return <PetsIcon className={className} />;
    case IconKind.HAPPY_FACE:
      return <EmojiEmotionsIcon className={className} />;
    case IconKind.STAR:
      return <StarIcon className={className} />;
    case IconKind.SUN:
      return <WbSunnyIcon className={className} />;
    case IconKind.MOON:
      return <Brightness2Icon className={className} />;
    case IconKind.SNOWFLAKE:
      return <AcUnitIcon className={className} />;
    case IconKind.CLOUD:
      return <CloudIcon className={className} />;
    case IconKind.THUMBS_UP:
      return <ThumbUpIcon className={className} />;
    default:
      return <QuestionMarkIcon className={className} />;
  }
};
