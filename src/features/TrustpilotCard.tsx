import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { SiTrustpilot } from "react-icons/si";
import CustomLink from "../components/CustomLink";
import CustomCard from "../components/CustomCard";

const TrustpilotCard = () => {
  return (
    <CustomCard bgcolor="#000032" tcolor="white" height={180} width={350}>
      <Box display="inline-flex" alignItems="center">
        <Icon as={SiTrustpilot} boxSize={6} color="#00C48C" />
        <Heading>Trustpilot</Heading>
      </Box>
      <Text>
        Show us your love by leaving a{" "}
        <span style={{ color: "#00C48C" }}>positive</span> review on trust pilot
        and receive the extension of 50 additional products
      </Text>
      <CustomLink
        color="#00C48C"
        url="https://br.trustpilot.com/"
        text="Write a review on Truspilot"
      />
    </CustomCard>
  );
};

export default TrustpilotCard;
