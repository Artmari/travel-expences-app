import React from "react";
import { Chip, ChipProps } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface TransportChipProps {
  transportType: string;
  Icon: SvgIconComponent;
  selected: boolean;
  onClick: () => void;
}

const TransportChip: React.FC<TransportChipProps> = ({
  transportType,
  Icon,
  selected,
  onClick,
  ...chipProps
}) => {
  return (
    <Chip
      label={transportType}
      icon={<Icon />}
      color={selected ? "primary" : "default"}
      onClick={onClick}
      {...chipProps}
    />
  );
};

export default TransportChip;
