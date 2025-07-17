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
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        height: { xs: "auto", md: 800 },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        onClick={handleBoxClick}
        sx={{
          width: { xs: "100%", md: "70.33%" },
          height: { xs: 420, md: 800 },
          backgroundColor: "#87E4EE",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          position: "relative",
          mb: { xs: 0, md: 0 },
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
          <h2 style={{ fontSize: 22, margin: 0 }}>Own web marketplace</h2>
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
            src={webImages[4]}
            alt="Description of first image"
            className="imageone"
            sx={{
              width: { xs: "60%", md: "75%" },
              height: { xs: 200, md: "60%" },
              objectFit: "contain",
              borderRadius: { xs: 3, md: 0 },
              boxShadow: { xs: 2, md: 0 },
              background: { xs: "#fff", md: "none" },
              p: { xs: 1, md: 0 },
              position: { xs: "static", md: "absolute" },
              top: { md: "10%" },
              left: { md: "5%" },
              zIndex: 1,
              margin: { xs: 0, md: 0 },
              transition: "all 0.5s ease",
            }}
          />
          <Box
            component="img"
            src={webImages[0]}
            className="imagetwo"
            alt="Description of second image"
            sx={{
              width: { xs: "60%", md: "75%" },
              height: { xs: 200, md: "60%" },
              objectFit: "contain",
              borderRadius: { xs: 3, md: 0 },
              boxShadow: { xs: 2, md: 0 },
              background: { xs: "#fff", md: "none" },
              p: { xs: 1, md: 0 },
              position: { xs: "static", md: "absolute" },
              top: { md: "40%" },
              left: { md: "20%" },
              zIndex: 2,
              margin: { xs: 0, md: 0 },
              transition: "all 0.5s ease",
            }}
          />
        </Box>
      </Box>
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleCloseMenu}>
        <MenuItem onClick={handleViewImages}>View Images</MenuItem>
        <MenuItem onClick={handleOpenGitHub}>Open in GitHub</MenuItem>
      </Menu>
    </Box>
  );
};
