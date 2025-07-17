import Box from "@mui/material/Box";
import { hebImages, prestoImages, manzanaImages } from "../../../utils/images";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

export type ProjectsProps = {
  onOpenDialog: (images: string[]) => void;
};

const playStoreLinks = {
  heb: "https://play.google.com/store/apps/details?id=com.hebmex.cel&hl=es_CO",
  presto: "https://github.com/DavidIjsud/presto-latam", // Changed to GitHub
  manzana: "https://play.google.com/store/search?q=Manzana%20Verde&c=apps&hl=es_CO",
};

const appStoreLinks = {
  heb: "https://apps.apple.com/mx/app/mi-h-e-b/id545728013",
  manzana: "https://apps.apple.com/bo/app/manzana-verde-healthy-food/id1542798197?l=en-GB",
};

export const FirstGeneralRow = ({ onOpenDialog }: ProjectsProps) => {
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null);
  const [selectedProject, setSelectedProject] = React.useState<null | "heb" | "presto" | "manzana">(null);

  const handleBoxClick = (event: React.MouseEvent<HTMLElement>, project: "heb" | "presto" | "manzana") => {
    setMenuAnchor(event.currentTarget);
    setSelectedProject(project);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
    setSelectedProject(null);
  };

  const handleViewImages = () => {
    if (selectedProject === "heb") onOpenDialog(hebImages);
    else if (selectedProject === "presto") onOpenDialog(prestoImages);
    else if (selectedProject === "manzana") onOpenDialog(manzanaImages);
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
      {/* HEB Project */}
      <Box
        onClick={(e) => handleBoxClick(e, "heb")}
        sx={{
          width: { xs: "100%", md: "33.33%" },
          height: { xs: 420, md: 800 },
          backgroundColor: "#FF2E25",
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
          <h2 style={{ fontSize: 22, margin: 0 }}>Mi HEB</h2>
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
            src={hebImages[12]}
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
            src={hebImages[13]}
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
      {/* Presto Project */}
      <Box
        onClick={(e) => handleBoxClick(e, "presto")}
        sx={{
          width: { xs: "100%", md: "33.33%" },
          height: { xs: 260, md: 800 },
          backgroundColor: "#87E4EE",
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
          <h2 style={{ fontSize: 22, margin: 0 }}>Presto Latam</h2>
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
            src={prestoImages[0]}
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
      {/* Manzana Verde Project */}
      <Box
        onClick={(e) => handleBoxClick(e, "manzana")}
        sx={{
          width: { xs: "100%", md: "33.33%" },
          height: { xs: 420, md: 800 },
          backgroundColor: "#64B162",
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
          <h2 style={{ fontSize: 22, margin: 0 }}>Manzana Verde</h2>
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
            src={manzanaImages[2]}
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
            src={manzanaImages[5]}
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
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleCloseMenu}>
        <MenuItem onClick={handleViewImages}>View Images</MenuItem>
        {selectedProject === "presto" ? (
          <MenuItem onClick={handleOpenPlayStore}>Open in GitHub</MenuItem>
        ) : (
          <MenuItem onClick={handleOpenPlayStore}>Open in Google Play</MenuItem>
        )}
        {(selectedProject === "heb" || selectedProject === "manzana") && <MenuItem onClick={handleOpenAppStore}>Open in App Store</MenuItem>}
      </Menu>
    </Box>
  );
};
