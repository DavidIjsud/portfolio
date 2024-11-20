import { Box, Dialog } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ContainerProjects from "./container_projects";

export type ImagesModalCarouselProps = {
  images: string[];
  open: boolean;
  onClose: () => void;
};

function splitIntoChunks<T>(list: T[], chunkSize: number): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < list.length; i += chunkSize) {
    result.push(list.slice(i, i + chunkSize));
  }

  return result;
}

export default function ImagesModalCarousel({
  images,
  open,
  onClose,
}: ImagesModalCarouselProps) {
  var chuckedImages = splitIntoChunks<string>(images, 3);
  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth={false}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative", // Ensure content is centered
        },
      }}
      sx={{
        "& .MuiDialog-container": {
          position: "fixed", // Fix it to the viewport
          top: "50%", // Vertically center
          left: "50%", // Horizontally center
          transform: "translate(-50%, -50%)", // Adjust for true centering
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Box
        sx={{
          width: "1350px",
          height: "auto", // Adjust the height if needed
        }}
      >
        <Carousel
          autoPlay={false}
          animation="slide"
          indicators={true}
          duration={1350}
          navButtonsAlwaysVisible
        >
          {chuckedImages.map((item, i) => (
            <ContainerProjects images={item} key={i} />
          ))}
        </Carousel>
      </Box>
    </Dialog>
  );
}
