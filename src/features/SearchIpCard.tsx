import { Box, Heading, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import InfoRow from "../components/InfoRow";
import CustomCard from "../components/CustomCard";
import CustomLink from "../components/CustomLink";
import Loading from "../components/Loading";

const SearchIpCard = () => {
  const [ip, setIp] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!ip) {
      setError("Please enter a valid IP address.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://ip-api.com/json/${ip}`);
      setCountry(response.data.country);
      setRegion(response.data.region);
      setCity(response.data.city);
    } catch (e: any) {
      setError(e.message || "Ocorreu um erro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomCard>
      <Heading>Search by IP: </Heading>
      <Box display="flex" flexDir="row" gap={2}>
        <Input
          placeholder="Example: 161.86.147.107"
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
        ></Input>
        <Loading isLoading={loading} onClick={handleSearch}>
          Search
        </Loading>
      </Box>
      {error && <Text color="red">{error}</Text>}

      <InfoRow label="Country" value={country} />
      <InfoRow label="Region" value={region} />
      <InfoRow label="City" value={city} />
      <CustomLink
        color="#21B8FA"
        url="https://ip-api.com/"
        text="To learn more about this API"
      />
    </CustomCard>
  );
};

export default SearchIpCard;
