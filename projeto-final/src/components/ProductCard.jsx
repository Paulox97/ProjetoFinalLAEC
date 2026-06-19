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
  Badge,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export function ProductCard({ produto, onAdd }) {
  if (!produto) return null;

  const { id, nome, precopromo, preco, precopix, marca, imagem } = produto;

  const { cart } = useCart();
  const produtoNoCarrinho = cart.find((item) => item.id === id);
  const quantidadeNoCarrinho = produtoNoCarrinho ? produtoNoCarrinho.quantidade : 0;

  return (
    <Card maxW="sm" h="100%" variant="outline" overflow="hidden">
      
      {quantidadeNoCarrinho > 0 && (
        <Badge position="absolute" top="12px" right="12px" colorScheme="teal" variant="solid" borderRadius="full" px="3" py="1" fontSize="xs" zIndex="1">
          {quantidadeNoCarrinho} no carrinho
        </Badge>
      )}
      
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
        <Stack p="4" spacing="1" align="center" textAlign="center">
          <Text fontSize="xl">{nome}</Text>
          <Text>{marca}</Text>
          <HStack spacing="2" alignItems="center" justify="center">
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
      <CardFooter justify="center" pt="0">
        <ButtonGroup spacing="2" >
          <Button variant="solid" bg="#236D83" color="white" _hover={{ bg: "#1b5a6d" }} onClick={onAdd}>
            {quantidadeNoCarrinho > 0 ? "Adicionar mais um" : "Adicionar ao carrinho"}
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
