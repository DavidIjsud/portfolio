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
        onClick={(e) => handleBoxClick(e, "heb")}
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
            top: "10%",
            left: "10%",
            zIndex: 1,
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
            top: "40%",
            left: "30%",
            zIndex: 2,
          }}
        />
      </Box>
      <Box
        onClick={(e) => handleBoxClick(e, "presto")}
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
        onClick={(e) => handleBoxClick(e, "manzana")}
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
            top: "10%",
            left: "10%",
            zIndex: 1,
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
            top: "40%",
            left: "30%",
            zIndex: 2,
          }}
        />
      </Box>
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleCloseMenu}>
        <MenuItem onClick={handleViewImages}>View Images</MenuItem>
        {selectedProject === "presto" ? (
          <MenuItem onClick={handleOpenPlayStore}>Open in GitHub</MenuItem>
        ) : (
          <MenuItem onClick={handleOpenPlayStore}>Open in Google Play</MenuItem>
        )}
      </Menu>
    </Box>
  );
};
