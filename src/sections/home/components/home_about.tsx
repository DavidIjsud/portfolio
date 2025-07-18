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
        I'm David, a dedicated Mobile Engineer with over 7 years of experience building high-quality Android and Flutter applications. I specialize in delivering scalable and user-focused solutions, from fintech platforms to e-commerce and logistics apps, with a strong track record at companies like Presto, Loyalty Clubs, and Manzana Verde Inc.
        <br />
        <br />
        My core stack includes Kotlin, Flutter, Firebase, CI/CD pipelines with GitHub Actions, Codemagic and NestJS with TypeScript for backend. I have hands-on experience with secure mobile development practices, modern architecture patterns like MVVM and Clean Architecture, and backend development using NestJS to create robust RESTful and GraphQL APIs.
        <br />
        <br />
        I’m skilled across the full stack, particularly in Flutter, Firebase, and clean architecture, and I pride myself on efficient workflows with
        CI/CD integration using GitHub and Codemagic. No matter the project, I aim to build resilient, scalable code that keeps users coming back.
        <br/>
        Whether working in startups or enterprise environments, I take full ownership of product development, from planning and implementation to release. I'm passionate about crafting smooth, reliable user experiences and contributing to high-impact mobile products.
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
