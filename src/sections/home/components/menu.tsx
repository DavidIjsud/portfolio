import Box from "@mui/material/Box";
import Name from "./name";
import MenuItem from "./menu_items";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useEffect, useState } from "react";

export default function Menu() {
  const [menuSelected, setMenu] = useState("Home");

  const handleMenuSelected = (item: string) => {
    setMenu(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        handleMenuSelected("Home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "10%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Name />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          {["Home", "Services", "Portfolio", "Contact"].map((item) => (
            <MenuItem
              key={item}
              item={item}
              handleMenuSelected={handleMenuSelected}
              isSelected={item === menuSelected}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 2,
              height: "60px",
              backgroundColor: "#A08831",
            }}
          ></Box>
          <a
            href="https://www.linkedin.com/in/david-garcia-romero-73925a206/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <LinkedInIcon sx={{ color: "white", fontSize: 20 }} />
          </a>

          <a
            href="https://github.com/DavidIjsud"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <GitHubIcon sx={{ color: "white", fontSize: 20 }} />
          </a>
        </Box>
      </Box>
    </Box>
  );
}
