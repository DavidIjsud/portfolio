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
      <h2 style={{ lineHeight: "0", fontSize: "23px", color: "#A08831" }}>INTRODUCTION</h2>
      <h1>MOBILE, BACKEND ENGINEER</h1>
      <p>
        I am a passionate and dedicated mobile engineer with over 7 years of experience building high-impact mobile applications and
        backend-integrated solutions. Proven track record of delivering high-quality, user-friendly apps with thousands of downloads across Google
        Play and the Apple App Store.
        <br />
        <br />I have contributed to high-profile projects for companies such as Presto, Loyalty Clubs, and Manzana Verde Inc., leveraging the Flutter
        framework and clean architecture principles to build scalable and maintainable codebases.
        <br />
        <br />
        Experienced in CI/CD automation using GitHub and Codemagic, and proficient in Firebase for cloud functions, analytics, and real-time features.
        Additionally, I have working knowledge of backend integration using AWS services like S3, Buckets, and Lambda functions.
      </p>
      <Link to="Services" smooth={true} duration={1000}>
        <h5 style={{ color: "#A08831", cursor: "pointer" }}>Learn more</h5>
      </Link>
    </Box>
  );
}
