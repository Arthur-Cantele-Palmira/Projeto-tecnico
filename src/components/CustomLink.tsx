import { Link, Text, Icon } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

const CustomLink = ({
  color,
  url,
  text,
}: {
  url: string;
  text: string;
  color: string;
}) => {
  return (
    <Link color={color} href={url} target="blank">
      <Text>{text}</Text>
      <Icon as={FiArrowRight} boxSize={5} />
    </Link>
  );
};

export default CustomLink;
