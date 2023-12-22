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

export const RandomIcons: React.FC<{ iconKind: number }> = ({ iconKind }) => {
  switch (iconKind) {
    case IconKind.PET:
      return <PetsIcon className="text-gray-300 sm:text-5xl md:text-6xl" />;
    case IconKind.HAPPY_FACE:
      return (
        <EmojiEmotionsIcon className="text-gray-300 sm:text-5xl md:text-6xl" />
      );
    case IconKind.STAR:
      return <StarIcon className="text-gray-300 sm:text-5xl md:text-6xl" />;
    case IconKind.SUN:
      return <WbSunnyIcon className="text-gray-300 sm:text-5xl md:text-6xl" />;
    case IconKind.MOON:
      return (
        <Brightness2Icon className="text-gray-300 sm:text-5xl md:text-6xl" />
      );
    case IconKind.SNOWFLAKE:
      return <AcUnitIcon className="text-gray-300 sm:text-5xl md:text-6xl" />;
    case IconKind.CLOUD:
      return <CloudIcon className="text-gray-300 sm:text-5xl md:text-6xl" />;
    case IconKind.THUMBS_UP:
      return <ThumbUpIcon className="text-gray-300 sm:text-5xl md:text-6xl" />;
    default:
      return (
        <QuestionMarkIcon className="text-gray-300 sm:text-5xl md:text-6xl" />
      );
  }
};
