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
          paddingLeft: "100px",
          paddingRight: "100px",
          minHeight: "100vh",
        }}
      >
        <Menu />
        <HomeInformation />
      </Box>
    </Element>
  );
}
