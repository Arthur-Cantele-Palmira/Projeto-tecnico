import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type CustomCardProps = {
  bgcolor?: string;
  tcolor?: string;
  height?: number;
  width?: number;
  children: ReactNode;
};

const CustomCard = ({
  bgcolor = "white",
  tcolor = "#000059",
  height = 300,
  width = 370,
  children,
}: CustomCardProps) => {
  return (
    <Box
      bg={bgcolor}
      borderRadius={10}
      boxShadow="sm"
      color={tcolor}
      display="flex"
      flexDir="column"
      justifyContent="center"
      gap={2}
      h={height}
      m={4}
      p={4}
      w={width}
    >
      {children}
    </Box>
  );
};

export default CustomCard;
