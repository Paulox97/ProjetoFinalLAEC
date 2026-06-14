import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Link as ChakraLink,
  HStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export function ProductCard({ produto, onAdd }) {
  if (!produto) return null;

  const { nome, precopromo, preco, precopix, marca, imagem } = produto;
  console.log(onAdd);

  return (
    <Card maxW="sm" h="100%" variant="outline" overflow="hidden">
      <CardBody p="0">
        <ChakraLink as={RouterLink} to={`/produto/${produto.id}`} _hover={{ textDecoration: "none" }}>
          <Image
            src={`/img/${imagem}`}
            alt={nome}
            w="100%"
            maxH="300px"
            objectFit="cover"
            objectPosition="center top"
            borderTopRadius="md"
          />
        </ChakraLink>
        <Stack p="4" spacing="1">
          <Text fontSize="xl">{nome}</Text>
          <Text>{marca}</Text>
          <HStack spacing="2" alignItems="baseline">
            {precopromo && (
              <Text fontSize="lg" color="gray.500" as="s">
                {precopromo}
              </Text>
            )}
            
            <Text color="blue.900" fontSize="2xl" fontWeight="bold">{preco}</Text>
          </HStack>
          <Text color="blue.600" fontSize="lg" fontWeight="bold">{precopix}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" bg="#236D83" color="white" _hover={{ bg: "#1b5a6d" }} onClick={onAdd}>
            Adicionar ao carrinho
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
