import Box from "@mui/material/Box";

export default function Name() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <h1>DG</h1>
      <Box
        sx={{
          width: 10, // Width of the circle
          height: 10, // Height of the circle
          backgroundColor: "#A08831",
          borderRadius: "50%", // Makes the Box a circle
          marginTop: "20px",
        }}
      />
    </Box>
  );
}
