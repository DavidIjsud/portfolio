import Box from "@mui/material/Box";
import { FirstGeneralRow } from "./first_general_row";
import { SecondGeneralRow } from "./second_general_row";
import { ThirdGeneralRow } from "./third_general_row";
import ImagesModalCarousel from "./apps_projects_coursel";
import { useState } from "react";
import { FourhtGeneralRow } from "./fourth_general_row";

export default function GeneralProjects({ categorySelected }: { categorySelected: string }) {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const handleOpenDialog = (images: string[]) => {
    setImages(images);
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <ImagesModalCarousel images={images} open={showDialog} onClose={handleCloseDialog} />

      {(categorySelected === "All" || categorySelected === "Mobile") && <FirstGeneralRow onOpenDialog={handleOpenDialog} />}
      {(categorySelected === "All" || categorySelected === "Mobile") && <SecondGeneralRow onOpenDialog={handleOpenDialog} />}
      {(categorySelected === "All" || categorySelected === "Mobile") && <FourhtGeneralRow onOpenDialog={handleOpenDialog} />}
      {(categorySelected === "All" || categorySelected === "Web") && <ThirdGeneralRow onOpenDialog={handleOpenDialog} />}
    </Box>
  );
}
