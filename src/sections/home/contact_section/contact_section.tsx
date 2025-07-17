import Box from "@mui/material/Box";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { Element } from "react-scroll";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function ContactSection() {
  return (
    <Element name="Contact">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          direction: "column",
          backgroundColor: "#37383C",
          width: "100%",
          paddingLeft: { xs: 2, md: 6 },
          paddingRight: { xs: 2, md: 6 },
          paddingTop: { xs: 4, md: 15 },
          paddingBottom: { xs: 4, md: 15 },
          gap: { xs: 2, md: 0 },
        }}
      >
        <h3
          style={{
            color: "#A08831",
            alignContent: "center",
            alignSelf: "center",
            lineHeight: "0",
          }}
        >
          Contact
        </h3>
        <h1 style={{ alignSelf: "center", lineHeight: "0" }}>
          Ways to contact me
        </h1>
        <h4 style={{ alignSelf: "center", width: "50%", textAlign: "center" }}>
          I’d love to connect! Whether you have a project in mind, want to
          collaborate, or just have questions, feel free to reach out. Let’s
          work together to turn ideas into impactful solutions.
        </h4>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, sm: 5 },
            marginTop: { xs: 2, sm: 3 },
          }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=davidijsud@gmail.com&su=New%20Opportunity"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#323337",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "10px",
                gap: 1.5,
              }}
            >
              <MailOutlineIcon sx={{ color: "white", alignSelf: "center" }} />
              <p style={{ color: "white" }}>Davidijsud@gmail.com</p>
            </Box>
          </a>

          <a
            href="https://wa.link/x33p6u"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#323337",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "10px",
                gap: 1.5,
                cursor: "pointer",
              }}
            >
              <PhoneEnabledIcon sx={{ color: "white", alignSelf: "center" }} />
              <p style={{ color: "white" }}>+59160630063</p>
            </Box>
          </a>
        </Box>
        <ArrowUpwardIcon
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{
            color: "#A08831",
            alignContent: "center",
            alignSelf: "end",
            cursor: "pointer",
            size: "100px",
          }}
        />
      </Box>
    </Element>
  );
}
