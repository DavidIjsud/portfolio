import Box from "@mui/material/Box";
import { ProjectsProps } from "./first_general_row";
import { abastibleImages } from "../../../utils/images";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const FourhtGeneralRow = ({ onOpenDialog }: ProjectsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        height: { xs: "auto", md: 800 },
        alignItems: "start",
        justifyContent: "start",
      }}
    >
      <Box
        onClick={() => onOpenDialog(abastibleImages)}
        sx={{
          width: { xs: "100%", md: "33.33%" },
          height: { xs: 420, md: 800 },
          backgroundColor: "#E27728",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          position: "relative",
          mb: { xs: 2, md: 0 },
          cursor: "pointer",
          overflow: "hidden",
          px: { xs: 2, md: 0 },
          pt: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: { xs: 0, md: "70px" },
            paddingRight: { xs: 0, md: "70px" },
            pt: 0,
            pb: { xs: 2, md: 0 },
          }}
        >
          <h2 style={{ fontSize: 22, margin: 0 }}>Abastible DUO</h2>
          <ArrowForwardIcon sx={{ cursor: "pointer" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            width: "100%",
            height: { xs: 220, md: "100%" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 2, md: 0 },
            mt: { xs: 2, md: 0 },
            position: { xs: "static", md: "relative" },
          }}
        >
          <Box
            component="img"
            src={abastibleImages[2]}
            alt="Description of first image"
            className="imageone"
            sx={{
              width: { xs: "60%", md: "50%" },
              height: { xs: 200, md: "80%" },
              objectFit: "contain",
              borderRadius: { xs: 3, md: 0 },
              boxShadow: { xs: 2, md: 0 },
              background: { xs: "#fff", md: "none" },
              p: { xs: 1, md: 0 },
              position: { xs: "static", md: "absolute" },
              top: { md: "10%" },
              left: { md: "10%" },
              zIndex: 1,
              margin: { xs: 0, md: 0 },
              transition: "all 0.5s ease",
            }}
          />
          <Box
            component="img"
            src={abastibleImages[4]}
            className="imagetwo"
            alt="Description of second image"
            sx={{
              width: { xs: "60%", md: "35%" },
              height: { xs: 200, md: "55%" },
              objectFit: "contain",
              borderRadius: { xs: 3, md: 0 },
              boxShadow: { xs: 2, md: 0 },
              background: { xs: "#fff", md: "none" },
              p: { xs: 1, md: 0 },
              position: { xs: "static", md: "absolute" },
              top: { md: "40%" },
              left: { md: "30%" },
              zIndex: 2,
              margin: { xs: 0, md: 0 },
              transition: "all 0.5s ease",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
