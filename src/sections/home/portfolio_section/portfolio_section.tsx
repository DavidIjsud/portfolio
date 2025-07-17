import Box from "@mui/material/Box";
import { useState } from "react";
import { Element } from "react-scroll";
import GeneralProjects from "./general_probjects";
export default function PortfolioSection() {
  const categoriesOfProjects = ["All", "Mobile", "Web"];
  const [categorySelected, setCategory] = useState("All");

  const handleCategoryClick = (category: string) => {
    setCategory(category);
  };

  return (
    <Element name="Portfolio">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          direction: "column",
          backgroundColor: "#323337",
          paddingTop: "120px",
          minHeight: "100vh",
          minWidth: "100vw",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            color: "#A08831",
            alignContent: "center",
            alignSelf: "center",
            lineHeight: "0",
          }}
        >
          Portfolio
        </h3>
        <h1
          style={{
            alignSelf: "center",
            lineHeight: 1.1,
            fontSize: "clamp(1.3rem, 5vw, 2.2rem)",
            textAlign: "center",
            fontWeight: 700,
            margin: '0 0 18px 0',
          }}
        >
          Here samples of my<br />projects
        </h1>
        <h4
          style={{
            alignSelf: "center",
            width: "90%",
            maxWidth: 600,
            textAlign: "center",
            padding: "0 16px",
            margin: 0,
          }}
        >
          Explore my work across mobile app and web solutions, where each
          project is crafted to deliver high-impact experiences through clean
          code, intuitive interfaces, and reliable functionality. From fintech
          apps to e-commerce platforms, my portfolio reflects a dedication to
          building solutions that adapt to user needs and drive tangible
          results.
        </h4>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
          }}
        >
          {categoriesOfProjects.map((item) => (
            <h3
              style={{
                color: item === categorySelected ? "#A08831" : "white",
                cursor: "pointer",
              }}
              key={item}
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </h3>
          ))}
        </Box>
        <GeneralProjects categorySelected={categorySelected} />
      </Box>
    </Element>
  );
}
