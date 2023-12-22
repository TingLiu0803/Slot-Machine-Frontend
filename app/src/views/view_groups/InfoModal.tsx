import { Modal, Box, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

type InfoModal = {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "none",
  border: "none",
  outline: "none",
};

export const InfoModal: React.FC<InfoModal> = ({
  open,
  onClose,
  title,
  subtitle,
  description,
  className = "",
}) => {
  return (
    <>
      <HelpOutlineIcon
        className={`text-gray-500 cursor-pointer ${className}}`}
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
            {title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="text-sm md:text-base font-light"
          >
            {subtitle}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="text-sm md:text-base font-light"
          >
            {description}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
