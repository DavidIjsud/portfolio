import Box from "@mui/material/Box";
import Menu from "./components/menu";
import HomeInformation from "./components/home_information";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <Element name="Home">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          direction: "column",
          backgroundColor: "#323337",
          paddingLeft: { xs: 2, sm: 6, md: 12 },
          paddingRight: { xs: 2, sm: 6, md: 12 },
          minHeight: "100vh",
        }}
      >
        <Menu />
        <HomeInformation />
      </Box>
    </Element>
  );
}
