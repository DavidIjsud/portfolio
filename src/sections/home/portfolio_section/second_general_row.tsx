import Box from "@mui/material/Box";
import { misCuentasImages, laComerImages, loyaltyImages } from "../../../utils/images";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ProjectsProps } from "./first_general_row";

export const SecondGeneralRow = ({ onOpenDialog }: ProjectsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "800px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        onClick={() => onOpenDialog(misCuentasImages)}
        sx={{
          width: "33.33%",
          height: "800px",
          backgroundColor: "#2D50A4",
          display: "flex",
          alignItems: "center",
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
          <h2>Mis cuentas</h2>
          <ArrowForwardIcon
            sx={{
              cursor: "pointer",
            }}
          />
        </Box>
        <Box
          component="img"
          src={misCuentasImages[2]}
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
          src={misCuentasImages[7]}
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

      <Box
        onClick={() => onOpenDialog(laComerImages)}
        sx={{
          width: "33.33%",
          height: "800px",
          backgroundColor: "#E27728",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          flexDirection: "column",
          position: "relative",
          "&:hover .imageone": {
            top: "20%",
            transition: "all 0.5s ease",
          },
          "&:hover .imagetwo": {
            left: "50%",
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
          <h2>La comer</h2>
          <ArrowForwardIcon
            sx={{
              cursor: "pointer",
            }}
          />
        </Box>
        <Box
          component="img"
          src={laComerImages[2]}
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
          src={laComerImages[5]}
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
      <Box
        onClick={() => onOpenDialog(loyaltyImages)}
        sx={{
          width: "33.33%",
          height: "800px",
          backgroundColor: "#F3B240",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          flexDirection: "column",
          "&:hover .presto-image": {
            width: "48%",
            height: "75%",
            transition: "all 0.15s ease",
          },
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
          <h2>Shell Bolivia</h2>
          <ArrowForwardIcon
            sx={{
              cursor: "pointer",
            }}
          />
        </Box>

        <Box
          component="img"
          src={loyaltyImages[0]}
          alt="Description of second image"
          className="presto-image"
          sx={{
            width: "43%",
            height: "70%",
            cursor: "pointer",
            display: "block",
            marginTop: "50px",
            transition: "all 0.15s ease",
          }}
        />
      </Box>
    </Box>
  );
};
