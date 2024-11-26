import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
export default function HomeContactInformation() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
        height: "90%",
      }}
    >
      <h1 style={{ lineHeight: "1", fontSize: "70px" }}>
        <span style={{ display: "block" }}>David</span>
        <span style={{ display: "block" }}>
          Garcia<span style={{ color: "#A08831" }}>.</span>
        </span>
      </h1>
      <Box
        sx={{
          width: "40px",
          height: 2,
          backgroundColor: "#A08831",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          gap: 1,
        }}
      >
        <a
          href="https://www.tiktok.com/@davidijsud"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ cursor: "pointer" }}>Tiktok |</h4>
        </a>
        <a
          href="https://www.youtube.com/@codeya"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ cursor: "pointer" }}>Youtube</h4>
        </a>
      </Box>
      <Button
        variant="outlined"
        href="https://calendly.com/davidijsud"
        target="_blank"
        sx={{
          marginTop: "30px",
          color: "white",
          borderColor: "#A08831",
          width: "180px",
        }}
      >
        Schedule a meet
      </Button>
      <Button
        variant="outlined"
        href="https://wa.link/x33p6u"
        target="_blank"
        sx={{
          marginTop: "30px",
          color: "white",
          borderColor: "#A08831",
          width: "150px",
        }}
      >
        Contact me
      </Button>
    </Box>
  );
}
