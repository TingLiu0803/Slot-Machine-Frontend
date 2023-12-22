import { Modal, Box, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { GameSetting } from "../../db/slot_machine_db";

type InfoModal = {
  open: boolean;
  onClose: () => void;
  gameSetting: GameSetting;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "none",
  border: "none",
};

export const InfoModal: React.FC<InfoModal> = ({
  open,
  onClose,
  gameSetting,
}) => {
  return (
    <>
      <HelpOutlineIcon
        className="text-gray-500 cursor-pointer"
        fontSize="large"
        onClick={onClose}
      />
      <Modal
        open={open}
        onClose={onClose}
        className="flex flex-col items-center justify-center text-gray-100"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h3"
            component="h2"
            className="font-bold text-lg md:text-3xl"
          >
            How To Win Tokens
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="text-sm md:text-base font-light"
          >
            Click "Play" to start the game
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="text-sm md:text-base font-light"
          >
            {`Deduct ${gameSetting.tokenCostPerPlay} tokens per spin`}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="text-sm md:text-base font-light"
          >
            {`Award ${gameSetting.minorReward} tokens if two third of symbols match`}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="text-sm md:text-base font-light"
          >
            {`Award ${gameSetting.majorReward} tokens if all symbols match`}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
