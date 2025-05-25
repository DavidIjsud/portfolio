import Box from "@mui/material/Box";
import { ProjectsProps } from "./first_general_row";
import { abastibleImages } from "../../../utils/images";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const FourhtGeneralRow = ({ onOpenDialog }: ProjectsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "800px",
        alignItems: "start",
        justifyContent: "start",
      }}
    >
      <Box
        onClick={() => onOpenDialog(abastibleImages)}
        sx={{
          width: "33.33%",
          height: "800px",
          backgroundColor: "#E27728",
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          position: "relative",
          flexDirection: "column",
          "&:hover .imageone": {
            top: "20%",
            transition: "all 0.5s ease",
          },
          "&:hover .imagetwo": {
            top: "10%",
            transition: "all 0.5s ease",
          },
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: "70px",
            paddingRight: "70px",
          }}
        >
          <h2>Abastible DUO</h2>
          <ArrowForwardIcon
            sx={{
              cursor: "pointer",
            }}
          />
        </Box>
        <Box
          component="img"
          src={abastibleImages[2]}
          alt="Description of first image"
          className="imageone"
          sx={{
            width: "50%",
            height: "80%",
            cursor: "pointer",
            position: "absolute",
            transition: "all 0.5s ease",
            top: "10%", // Initial position
            left: "10%", // Adjust as needed
            zIndex: 1, // Layer priority
          }}
        />
        <Box
          component="img"
          src={abastibleImages[4]}
          className="imagetwo"
          alt="Description of second image"
          sx={{
            width: "35%",
            height: "55%",
            cursor: "pointer",
            position: "absolute",
            transition: "all 0.5s ease",
            top: "40%", // Initial position
            left: "30%", // Adjust as needed
            zIndex: 2, // Higher priority
          }}
        />
      </Box>
    </Box>
  );
};
