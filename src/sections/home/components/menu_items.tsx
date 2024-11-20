import Box from "@mui/material/Box";
import { Link } from "react-scroll";

export type MenuItemProps = {
  item: string;
  isSelected: boolean;
  handleMenuSelected: (item: string) => void;
};

export default function MenuItem(item: MenuItemProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Link
        to={item.item}
        smooth={true}
        onClick={() => item.handleMenuSelected(item.item)}
        style={{
          marginRight: "20px",
          color: item.isSelected ? "#A08831" : "white",
          cursor: "pointer",
        }}
      >
        {item.item}
      </Link>
    </Box>
  );
}