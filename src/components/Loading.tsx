import { Button, Spinner } from "@chakra-ui/react";

const Loading = ({
  isLoading,
  onClick,
  children,
}: {
  isLoading: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Button
      bg="#15436E"
      border="1px solid #15436E"
      color="white"
      onClick={onClick}
      disabled={isLoading}
      type="button"
      _hover={{
        bg: "#1A5080",
        borderColor: "#1A5080",
      }}
    >
      {isLoading ? <Spinner color="white" size="sm" ml={2} /> : children}
    </Button>
  );
};

export default Loading;
