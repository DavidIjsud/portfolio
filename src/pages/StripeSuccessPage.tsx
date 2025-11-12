import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function StripeSuccessPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#323337",
        padding: { xs: "20px", md: "40px" },
      }}
    >
      <CheckCircleIcon
        sx={{
          fontSize: { xs: "80px", md: "120px" },
          color: "#4CAF50",
          marginBottom: "20px",
        }}
      />
      <Typography
        variant="h3"
        component="h1"
        sx={{
          color: "white",
          textAlign: "center",
          marginBottom: "16px",
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: "bold",
        }}
      >
        Configuration Successful!
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{
          color: "#B0B0B0",
          textAlign: "center",
          maxWidth: "600px",
          fontSize: { xs: "1rem", md: "1.25rem" },
        }}
      >
        Your configuration has been completed successfully.
      </Typography>
    </Box>
  );
}

