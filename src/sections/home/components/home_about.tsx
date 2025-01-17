import Box from "@mui/material/Box";
import { Link } from "react-scroll";

export default function HomeAbout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "90%",
        width: "30%",
        marginLeft: "80px",
      }}
    >
      <h2 style={{ lineHeight: "0", fontSize: "23px", color: "#A08831" }}>
        INTRODUCTION
      </h2>
      <h1>MOBILE, BACKEND ENGINEER</h1>
      <p>
        I'm David, a mobile developer passionate about turning ideas into
        impactful apps that users love. With over 7 years of experience, I’ve
        built mobile and web solutions that deliver seamless, intuitive
        experiences, from streamlined fintech apps to user-centered e-commerce
        platforms. My work with companies like Presto, Loyalty Clubs, and
        Manzana Verde Inc. has earned thousands of downloads, driven by my
        dedication to quality and ease of use.
        <br />
        <br />
        I’m skilled across the full stack, particularly in Flutter, Firebase,
        and clean architecture, and I pride myself on efficient workflows with
        CI/CD integration using GitHub and Codemagic. No matter the project, I
        aim to build resilient, scalable code that keeps users coming back.
      </p>
      <Link to="Services" smooth={true} duration={1000}>
        <h5 style={{ color: "#A08831", cursor: "pointer" }}>Learn more</h5>
      </Link>
    </Box>
  );
}
