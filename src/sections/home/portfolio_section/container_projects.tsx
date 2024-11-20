import Box from "@mui/material/Box";
import ProjectItem from "./project_item";

interface ContainerProjectsProps {
  images: string[];
}

export default function ContainerImages({ images }: ContainerProjectsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "1350px",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {images.map((imagePath, index) => (
        <ProjectItem key={index} image={imagePath} />
      ))}
    </Box>
  );
}
