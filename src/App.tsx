import RandomCountryCard from "./features/RandomCountryCard";
import SearchIpCard from "./features/SearchIpCard";
import TrustpilotCard from "./features/TrustpilotCard";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box
      display="flex"
      flexDir="row"
      flexWrap="wrap"
      justifyContent="center"
      mt={20}
    >
      <SearchIpCard />
      <RandomCountryCard />
      <TrustpilotCard />
    </Box>
  );
}

export default App;
