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
        flexDirection: "row",
        width: "100%",
        height: "800px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        onClick={(e) => handleBoxClick(e, "miscuentas")}
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
            top: "10%",
            left: "10%",
            zIndex: 1,
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
            top: "40%",
            left: "30%",
            zIndex: 2,
          }}
        />
      </Box>

      <Box
        onClick={(e) => handleBoxClick(e, "lacomer")}
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
            top: "10%",
            left: "10%",
            zIndex: 1,
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
            top: "40%",
            left: "30%",
            zIndex: 2,
          }}
        />
      </Box>
      <Box
        onClick={(e) => handleBoxClick(e, "loyalty")}
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
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleCloseMenu}>
        <MenuItem onClick={handleViewImages}>View Images</MenuItem>
        <MenuItem onClick={handleOpenPlayStore}>Open in Google Play</MenuItem>
        {(selectedProject === "miscuentas" || selectedProject === "lacomer") && <MenuItem onClick={handleOpenAppStore}>Open in App Store</MenuItem>}
      </Menu>
    </Box>
  );
};
