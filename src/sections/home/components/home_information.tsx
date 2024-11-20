import Box from "@mui/material/Box";
import HomeContactInformation from "./home_contact_information";
import profesionalImage from "../../../assets/images/foto_unformal.png";
import HomeAbout from "./home_about";

export default function HomeInformation() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "90%",
        gap: 0,
        marginTop: "120px",
        justifyContent: "space-between",
      }}
    >
      <HomeContactInformation />
      <Box
        sx={{
          position: "absolute",
          top: "150px", // Adjust to position the circle vertically
          left: "45%", // Center horizontally
          transform: "translateX(-50%)", // Center circle
          width: "450px", // Adjust to control size
          height: "450px",
          backgroundColor: "rgb(47, 48, 54)",
          borderRadius: "50%",
          zIndex: 1, // Keep behind the image
        }}
      />
      <img
        src={profesionalImage}
        alt="Description of image"
        style={{ width: "500px", height: "500px", zIndex: 1 }} // Ensure the image is above
      />
      <HomeAbout />
    </Box>
  );
}
