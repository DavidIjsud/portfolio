import Box from "@mui/material/Box";
import { Link } from "react-scroll";

export default function HomeAbout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: { xs: "auto", md: "90%" },
        width: { xs: "100%", md: "30%" },
        marginLeft: { xs: 0, md: 10 },
        padding: { xs: 2, md: 0 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box
        component="h2"
        sx={{
          lineHeight: "0",
          fontSize: { xs: 18, md: 23 },
          color: "#A08831",
        }}
      >
        INTRODUCTION
      </Box>
      <Box
        component="h1"
        sx={{
          fontSize: { xs: 24, sm: "28px", md: "inherit" },
          lineHeight: { xs: 1.2, md: "inherit" },
        }}
      >
        MOBILE, BACKEND ENGINEER
      </Box>
      <Box
        component="p"
        sx={{
          fontSize: { xs: 14, sm: "16px", md: "inherit" },
          lineHeight: { xs: 1.5, md: "inherit" },
          textAlign: { xs: "justify", md: "left" },
          padding: { xs: "0 10px", md: 0 },
        }}
      >
        I'm David, a mobile developer passionate about turning ideas into impactful apps that users love. With over 7 years of experience, I’ve built
        mobile and web solutions that deliver seamless, intuitive experiences, from streamlined fintech apps to user-centered e-commerce platforms. My
        work with companies like Presto, Loyalty Clubs, and Manzana Verde Inc. has earned thousands of downloads, driven by my dedication to quality
        and ease of use.
        <br />
        <br />
        I’m skilled across the full stack, particularly in Flutter, Firebase, and clean architecture, and I pride myself on efficient workflows with
        CI/CD integration using GitHub and Codemagic. No matter the project, I aim to build resilient, scalable code that keeps users coming back.
      </Box>
      <Link to="Services" smooth={true} duration={1000}>
        <Box
          component="h5"
          sx={{
            color: "#A08831",
            cursor: "pointer",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Learn more
        </Box>
      </Link>
    </Box>
  );
}
