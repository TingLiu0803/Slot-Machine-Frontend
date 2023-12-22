import { Paper } from "@mui/material";
import React from "react";

export const Card: React.FC<{ className?: string }> = ({ className }) => {
  return <Paper className={className} />;
};
