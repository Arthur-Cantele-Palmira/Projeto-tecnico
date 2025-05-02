import { Text } from "@chakra-ui/react";

const InfoRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <Text fontWeight="bold">
      {label}:{" "}
      <span style={{ fontWeight: "normal", color: "black" }}>{value}</span>
    </Text>
  );
};

export default InfoRow;
