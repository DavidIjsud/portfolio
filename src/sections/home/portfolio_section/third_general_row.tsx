import Box from "@mui/material/Box";
import { webImages } from "../../../utils/images";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ProjectsProps } from "./first_general_row";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

const githubLink = "https://github.com/DavidIjsud/hobby-ecommerce-web";

export const ThirdGeneralRow = ({ onOpenDialog }: ProjectsProps) => {
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null);

  const handleBoxClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
  };

  const handleViewImages = () => {
    onOpenDialog(webImages);
    handleCloseMenu();
  };

  const handleOpenGitHub = () => {
    window.open(githubLink, "_blank");
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
        onClick={handleBoxClick}
        sx={{
          width: "70.33%",
          height: "800px",
          backgroundColor: "#87E4EE",
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
          <h2>Own web marketplace</h2>
          <ArrowForwardIcon
            sx={{
              cursor: "pointer",
            }}
          />
        </Box>
        <Box
          component="img"
          src={webImages[4]}
          alt="Description of first image"
          className="imageone"
          sx={{
            width: "75%",
            height: "60%",
            cursor: "pointer",
            position: "absolute",
            transition: "all 0.5s ease",
            top: "10%", // Initial position
            left: "5%", // Adjust as needed
            zIndex: 1, // Layer priority
          }}
        />
        <Box
          component="img"
          src={webImages[0]}
          className="imagetwo"
          alt="Description of second image"
          sx={{
            width: "75%",
            height: "60%",
            cursor: "pointer",
            position: "absolute",
            transition: "all 0.5s ease",
            top: "40%", // Initial position
            left: "20%", // Adjust as needed
            zIndex: 2, // Higher priority
          }}
        />
      </Box>
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleCloseMenu}>
        <MenuItem onClick={handleViewImages}>View Images</MenuItem>
        <MenuItem onClick={handleOpenGitHub}>Open in GitHub</MenuItem>
      </Menu>
    </Box>
  );
};
