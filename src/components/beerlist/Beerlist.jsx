import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function BeerList() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao buscar os dados da API:", error);
      });
  }, []);

  useEffect(() => {
    const filteredBeers = beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredBeers);
  }, [searchTerm, beers]);

  return (
    <Box p={10} minH="90vh" bg="#1e272e" color="white">
      <Heading as="h1" mb={6} textAlign="center"color="#0B68F4">
        Lista de Cervejas
      </Heading>
      <InputGroup mb={4}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Pesquisar por nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
      <SimpleGrid columns={[1, 1, 4]} spacing={3}>
        {searchResults.map((beer) => (
          <Box
            key={beer.id}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            boxShadow="base"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.02)" }}
          >
            <img
              src={beer.image_url}
              alt={beer.name}
              style={{
                height: "20%",
                maxWidth: "2rem",
              }}
            />
            <Heading as="h2" size="md" mb={2} color="#0B68F4" mt="5">
              {beer.name}
            </Heading>
            <Text>
              <strong>Tagline:</strong> {beer.tagline}
            </Text>
            <Text>
              <strong>Descrição:</strong> {beer.description}
            </Text>
            <Text>
              <strong>ABV:</strong> {beer.abv}%
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default BeerList;
