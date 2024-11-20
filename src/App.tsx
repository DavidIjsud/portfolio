import Box from "@mui/material/Box";
import "./App.css";
import Home from "./sections/home/home";
import ServicesSection from "./sections/home/services_section/services_section";
import PortfolioSection from "./sections/home/portfolio_section/portfolio_section";
import ContactSection from "./sections/home/contact_section/contact_section";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        direction: "column",
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#323337",
      }}
    >
      <Home />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </Box>
  );
}

export default App;
