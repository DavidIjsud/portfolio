import Box from "@mui/material/Box";

export type ProjectItemProps = {
  image: string;
};

export default function ProjectItem(props: ProjectItemProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "450px",
        height: "420px",
        backgroundColor: "#9C2122",
        alignItems: "center",
        cursor: "pointer",
        paddingTop: "10px",
        paddingBottom: "0px",
        paddingLeft: "10px",
        paddingRight: "10px",
        borderRight: "4px solid black",
        borderLeft: "4px solid black",
        "&:hover": {
          backgroundColor: "#4C1717",
          "& .innerBox": {
            backgroundColor: "#454545",
          },
        },
      }}
    >
      <img
        src={props.image}
        style={{
          width: "400px",
          height: "400px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
    </Box>
  );
}
