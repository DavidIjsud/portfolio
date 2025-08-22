import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// Función para abrir la app con fallback
const openAppWithFallback = (path: string) => {
  const universalLink = `https://david-garcia-romero.com${path}`;
  const customScheme = `la.manzanaVerdeApp://${path}`;

  // Intentar abrir con el esquema personalizado primero
  window.location.href = customScheme;

  // Fallback: después de un delay, verificar si la app se abrió
  setTimeout(() => {
    // Si estamos en la misma página, significa que la app no se abrió
    // Entonces redirigir a la URL universal
    window.location.href = universalLink;
  }, 1000);
};

export default function HomeContactInformation() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "20%", md: "20%" },
        height: { xs: "auto", md: "90%" },
        alignItems: { xs: "center", md: "flex-start" },
      }}
    >
      <Box
        component="h1"
        sx={{
          lineHeight: "1",
          fontSize: { xs: "3rem", md: "70" },
          textAlign: { xs: "center", md: "left" },
          margin: 0,
        }}
      >
        <span style={{ display: "block" }}>David</span>
        <span style={{ display: "block" }}>
          Garcia<span style={{ color: "#A08831" }}>.</span>
        </span>
      </Box>
      <Box
        sx={{
          width: "40px",
          height: 2,
          backgroundColor: "#A08831",
          margin: { xs: "8px auto", md: 0 },
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          gap: 1,
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <a
          href="https://www.tiktok.com/@davidijsud"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ cursor: "pointer" }}>
            Tiktok
          </h4>
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
          width: { xs: "220px", md: "180px" },
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
          width: { xs: "180px", md: "150px" },
        }}
      >
        Contact me
      </Button>
      <a
        href="https://david-garcia-romero.com/s/miraflores"
        onClick={e => {
          e.preventDefault();
          openAppWithFallback('/s/miraflores');
        }}
        style={{ textDecoration: "none", color: "white", marginLeft: "16px", marginTop: "30px", display: "inline-block" }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "#A08831",
            width: { xs: "180px", md: "150px" },
          }}
        >
          Abrir en la App 2
        </Button>
      </a>
    </Box>
  );
}
