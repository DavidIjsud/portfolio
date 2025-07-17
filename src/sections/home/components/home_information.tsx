import Box from "@mui/material/Box";
import HomeContactInformation from "./home_contact_information";
import profesionalImage from "../../../assets/images/foto_unformal.png";
import HomeAbout from "./home_about";

export default function HomeInformation() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        height: { xs: "auto", md: "90%" },
        gap: { xs: 2, md: 0 },
        marginTop: { xs: 2, md: 12 },
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: { xs: "center", md: "flex-start" },
        position: "relative",
      }}
    >
      <HomeContactInformation />
      {/* Background Circle - only on desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: 150,
          left: "45%",
          transform: "translateX(-50%)",
          width: 450,
          height: 450,
          backgroundColor: "rgb(47, 48, 54)",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
      {/* Profile Image */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: { xs: 1, md: 0 },
          marginBottom: { xs: 1, md: 0 },
          maxWidth: { xs: 180, sm: 250, md: 500 },
          width: "100%",
        }}
      >
        <img
          src={profesionalImage}
          alt="Professional photo"
          style={{
            width: "100%",
            height: "auto",
            zIndex: 2,
            borderRadius: "50%",
            maxWidth: "100%",
          }}
        />
      </Box>
      <HomeAbout />
    </Box>
  );
}
