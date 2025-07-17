import Box from "@mui/material/Box";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import DataObjectIcon from "@mui/icons-material/DataObject";
import { Element } from "react-scroll";

export default function ServicesSection() {
  return (
    <Element name="Services">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          direction: "column",
          backgroundColor: "#37383C",
          width: "100%",
          paddingLeft: { xs: 2, md: 6 },
          paddingRight: { xs: 2, md: 6 },
          paddingTop: { xs: 4, md: 15 },
          paddingBottom: { xs: 4, md: 15 },
          gap: { xs: 2, md: 0 },
        }}
      >
        <Box
          component="h3"
          sx={{
            color: "#A08831",
            alignContent: "center",
            alignSelf: "center",
            lineHeight: "0",
            fontSize: { xs: 18, md: "inherit" },
          }}
        >
          Services
        </Box>
        <Box
          component="h1"
          sx={{
            alignSelf: "center",
            lineHeight: "0",
            fontSize: { xs: 24, md: "inherit" },
            textAlign: "center",
          }}
        >
          What I am great at
        </Box>
        <Box
          component="h4"
          sx={{
            alignSelf: "center",
            width: { xs: "100%", sm: "80%" },
            textAlign: "center",
            fontSize: { xs: 14, md: "inherit" },
            lineHeight: { xs: 1.5, md: "inherit" },
            padding: { xs: 0, md: 0 },
          }}
        >
          Crafting high-quality mobile apps with Flutter, I excel in building
          scalable, user-friendly solutions. With strong full-stack skills and a
          focus on clean architecture, I deliver robust code that adapts easily
          to new features. Proficient in CI/CD and Firebase, I ensure seamless
          app experiences that drive engagement and customer satisfaction.
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 4, md: 20 },
            marginTop: { xs: 4, md: 15 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 0,
            }}
          >
            <Box
              sx={{
                width: { xs: 180, md: 260 },
                height: { xs: 180, md: 260 },
                backgroundColor: "#323237",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StayCurrentPortraitIcon
                sx={{
                  color: "white",
                  fontSize: { xs: 60, md: 120 },
                  alignSelf: "center",
                }}
              />
              <h3
                style={{ color: "white", marginTop: "20px", lineHeight: "0" }}
              >
                Mobile App
              </h3>
              <h5 style={{ lineHeight: "0" }}>+5 projects</h5>
            </Box>
            <h2
              style={{ lineHeight: "0", color: "#A08831", marginTop: "40px" }}
            >
              5+
            </h2>
            <h2 style={{ lineHeight: "0" }}>years of experience</h2>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 0,
            }}
          >
            <Box
              sx={{
                width: "260px",
                height: "260px",
                backgroundColor: "#323237",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LaptopChromebookIcon
                sx={{
                  color: "white",
                  fontSize: "120px",
                  alignSelf: "center",
                }}
              />
              <h3
                style={{ color: "white", marginTop: "20px", lineHeight: "0" }}
              >
                Web
              </h3>
              <h5 style={{ lineHeight: "0" }}>1 project</h5>
            </Box>
            <h2
              style={{ lineHeight: "0", color: "#A08831", marginTop: "40px" }}
            >
              1
            </h2>
            <h2 style={{ lineHeight: "0" }}>year of experience</h2>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 0,
            }}
          >
            <Box
              sx={{
                width: "260px",
                height: "260px",
                backgroundColor: "#323237",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DataObjectIcon
                sx={{
                  color: "white",
                  fontSize: "120px",
                  alignSelf: "center",
                }}
              />
              <h3
                style={{ color: "white", marginTop: "20px", lineHeight: "0" }}
              >
                Backend
              </h3>
              <h5 style={{ lineHeight: "0" }}>1 project</h5>
            </Box>
            <h2
              style={{ lineHeight: "0", color: "#A08831", marginTop: "40px" }}
            >
              1
            </h2>
            <h2 style={{ lineHeight: "0" }}>year of experience</h2>
          </Box>
        </Box>
      </Box>
    </Element>
  );
}
