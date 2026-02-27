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
        Senior React Native Engineer with 7+ years of experience designing and
        delivering scalable mobile applications for startups and high-growth
        companies across fintech, health, and consumer platforms. Expert in
        TypeScript, advanced state management (Redux, Zustand, Context), and
        performance-driven mobile architecture.
        <br />
        <br />
        Proven track record publishing
        production apps to App Store and Google Play, leading cross-functional
        teams, and building secure, payment-enabled systems using Stripe and
        Firebase. Strong background in Clean Architecture, CI/CD automation, and
        mobile-native integrations.
        <br />
        <br />
        I’m skilled across the full stack, particularly in typescript for react native development, Flutter and Android with kotlin, Firebase, and clean architecture, and I pride myself on efficient workflows with
        CI/CD integration using GitHub and Codemagic. No matter the project, I aim to build resilient, scalable code that keeps users coming back.
        <br />
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
