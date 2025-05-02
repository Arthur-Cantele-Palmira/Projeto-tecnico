import { Heading, Text, Icon } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { FaDice } from "react-icons/fa";
import InfoRow from "../components/InfoRow";
import CustomCard from "../components/CustomCard";
import CustomLink from "../components/CustomLink";
import Loading from "../components/Loading";

const RandomCountryCard = () => {
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [region, setRegion] = useState("");
  const [language, setLanguage] = useState("");
  const [population, setPopulation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const choseCountry = async () => {
    setLoading(true);

    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");

      const countries = response.data;
      const random = Math.floor(Math.random() * countries.length);
      const country = countries[random];

      setName(country.name?.common || "Unknown");
      setCapital(country.capital?.[0] || "Unknown");
      setRegion(country.region || "Unknown");
      setLanguage(
        country.languages
          ? (Object.values(country.languages) as string[])[0]
          : "Unknown"
      );
      setPopulation(country.population.toLocaleString() || "Unknown");
    } catch (e: any) {
      setError(e.message || "An error occurred while fetching the country");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomCard>
      <Heading>Country: </Heading>
      <Loading isLoading={loading} onClick={choseCountry}>
        <Icon as={FaDice} boxSize={5} color="white" mr={2} />
        Randomize
      </Loading>
      {error && <Text color="red">{error}</Text>}

      <InfoRow label="Name" value={name} />
      <InfoRow label="Capital" value={capital} />
      <InfoRow label="Region" value={region} />
      <InfoRow label="Language" value={language} />
      <InfoRow label="Population" value={population} />

      <CustomLink
        color="#21B8FA"
        url="https://restcountries.com/"
        text="To learn more about this API"
      />
    </CustomCard>
  );
};

export default RandomCountryCard;
