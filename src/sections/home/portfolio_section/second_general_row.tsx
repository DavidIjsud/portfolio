import Box from "@mui/material/Box";
import { misCuentasImages, laComerImages, loyaltyImages } from "../../../utils/images";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ProjectsProps } from "./first_general_row";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

const playStoreLinks = {
  miscuentas: "https://play.google.com/store/apps/details?id=miscuentas.com.bo.miscuentas&hl=es_CO",
  lacomer: "https://play.google.com/store/apps/details?id=com.LaComerApp&hl=es_CO",
  loyalty: "https://play.google.com/store/apps/details?id=com.loyaltyclubs.shell",
};

const appStoreLinks = {
  miscuentas: "https://apps.apple.com/bo/app/mis-cuentas-bolivia/id6448075291?l=en-GB",
  lacomer: "https://apps.apple.com/mx/app/la-comer/id1383866805",
  // loyalty: no app store link
};

export const SecondGeneralRow = ({ onOpenDialog }: ProjectsProps) => {
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null);
  const [selectedProject, setSelectedProject] = React.useState<null | "miscuentas" | "lacomer" | "loyalty">(null);

  const handleBoxClick = (event: React.MouseEvent<HTMLElement>, project: "miscuentas" | "lacomer" | "loyalty") => {
    setMenuAnchor(event.currentTarget);
    setSelectedProject(project);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
    setSelectedProject(null);
  };

  const handleViewImages = () => {
    if (selectedProject === "miscuentas") onOpenDialog(misCuentasImages);
    else if (selectedProject === "lacomer") onOpenDialog(laComerImages);
    else if (selectedProject === "loyalty") onOpenDialog(loyaltyImages);
    handleCloseMenu();
  };

  const handleOpenPlayStore = () => {
    if (selectedProject) {
      window.open(playStoreLinks[selectedProject], "_blank");
    }
    handleCloseMenu();
  };

  const handleOpenAppStore = () => {
    if (selectedProject && selectedProject in appStoreLinks) {
      window.open(appStoreLinks[selectedProject as keyof typeof appStoreLinks], "_blank");
    }
    handleCloseMenu();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        height: { xs: "auto", md: "800px" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 3, md: 0 },
      }}
    >
      {/* Mis cuentas Project */}
      <Box
        onClick={(e) => handleBoxClick(e, "miscuentas")}
        sx={{
          width: { xs: "100%", md: "33.33%" },
          height: { xs: 420, md: 800 },
          backgroundColor: "#2D50A4",
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
          <h2 style={{ fontSize: 22, margin: 0 }}>Mis cuentas</h2>
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
            src={misCuentasImages[2]}
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
            src={misCuentasImages[7]}
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
      {/* La comer Project */}
      <Box
        onClick={(e) => handleBoxClick(e, "lacomer")}
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
          <h2 style={{ fontSize: 22, margin: 0 }}>La comer</h2>
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
            src={laComerImages[2]}
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
            src={laComerImages[5]}
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
      {/* Shell Bolivia Project */}
      <Box
        onClick={(e) => handleBoxClick(e, "loyalty")}
        sx={{
          width: { xs: "100%", md: "33.33%" },
          height: { xs: 260, md: 800 },
          backgroundColor: "#F3B240",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          mb: { xs: 2, md: 0 },
          cursor: "pointer",
          overflow: "hidden",
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
          <h2 style={{ fontSize: 22, margin: 0 }}>Shell Bolivia</h2>
          <ArrowForwardIcon sx={{ cursor: "pointer" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: { xs: 180, md: "100%" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 2, md: 0 },
            mt: { xs: 2, md: 0 },
            position: { xs: "static", md: "relative" },
          }}
        >
          <Box
            component="img"
            src={loyaltyImages[0]}
            alt="Description of second image"
            className="presto-image"
            sx={{
              width: { xs: "80%", md: "43%" },
              height: { xs: 200, md: "70%" },
              display: "block",
              objectFit: "contain",
              borderRadius: { xs: 3, md: 0 },
              boxShadow: { xs: 2, md: 0 },
              background: { xs: "#fff", md: "none" },
              p: { xs: 1, md: 0 },
              margin: { xs: "0 auto", md: "50px auto 0 auto" },
              transition: "all 0.15s ease",
            }}
          />
        </Box>
      </Box>
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleCloseMenu}>
        <MenuItem onClick={handleViewImages}>View Images</MenuItem>
        <MenuItem onClick={handleOpenPlayStore}>Open in Google Play</MenuItem>
        {(selectedProject === "miscuentas" || selectedProject === "lacomer") && <MenuItem onClick={handleOpenAppStore}>Open in App Store</MenuItem>}
      </Menu>
    </Box>
  );
};
