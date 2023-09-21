import { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

function BeerList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao buscar os dados da API:", error);
      });
  }, []);

  return (
    <Box p={4} minH="90vh" bg="#272727" color="white">
      <Heading as="h1" mb={4} textAlign="center">
        Lista de Cervejas
      </Heading>
      <SimpleGrid columns={2} spacing={4}>
        {beers.map((beer) => (
          <Box
            key={beer.id}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            boxShadow="base"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.02)" }}
          >
            <Heading as="h2" size="md" mb={2}>
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
