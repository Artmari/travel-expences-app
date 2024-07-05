import React from "react";
import { Grid } from "@mui/material";
import TrainIcon from "@mui/icons-material/Train";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import TransportChip from "./TransportChip";

interface TransportChipsArrayProps {
  value: string;
  onChange: (value: string) => void;
}

const transportTypes = [
  { type: "Train", icon: TrainIcon },
  { type: "Plane", icon: FlightIcon },
  { type: "Bus", icon: DirectionsBusIcon },
  { type: "Car", icon: DirectionsCarFilledIcon },
  { type: "Motorcycle", icon: TwoWheelerIcon },
];

const TransportChipsArray: React.FC<TransportChipsArrayProps> = ({
  value,
  onChange,
}) => {
  return (
    <Grid container spacing={1}>
      {transportTypes.map((transport, index) => (
        <Grid item key={index}>
          <TransportChip
            transportType={transport.type}
            Icon={transport.icon}
            selected={value === transport.type}
            onClick={() => onChange(transport.type)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TransportChipsArray;
