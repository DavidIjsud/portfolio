import Box from "@mui/material/Box";
import { hebImages, prestoImages, manzanaImages } from "../../../utils/images";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export type ProjectsProps = {
  onOpenDialog: (images: string[]) => void;
};

export const FirstGeneralRow = ({ onOpenDialog }: ProjectsProps) => {
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
        onClick={() => onOpenDialog(hebImages)}
        sx={{
          width: "33.33%",
          height: "800px",
          backgroundColor: "#FF2E25",
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
          <h2>Mi HEB</h2>
          <ArrowForwardIcon
            sx={{
              cursor: "pointer",
            }}
          />
        </Box>
        <Box
          component="img"
          src={hebImages[12]}
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
          src={hebImages[13]}
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
        onClick={() => onOpenDialog(prestoImages)}
        sx={{
          width: "33.33%",
          height: "800px",
          backgroundColor: "#87E4EE",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          flexDirection: "column",
          cursor: "pointer",
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
          <h2>Presto Latam</h2>
          <ArrowForwardIcon
            sx={{
              cursor: "pointer",
            }}
          />
        </Box>

        <Box
          component="img"
          src={prestoImages[0]}
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
      <Box
        onClick={() => onOpenDialog(manzanaImages)}
        sx={{
          width: "33.33%",
          height: "800px",
          backgroundColor: "#64B162",
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
          <h2>Manzana Verde</h2>
          <ArrowForwardIcon
            sx={{
              cursor: "pointer",
            }}
          />
        </Box>
        <Box
          component="img"
          src={manzanaImages[2]}
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
          src={manzanaImages[5]}
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
