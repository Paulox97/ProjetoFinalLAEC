import { useParams, Link as RouterLink } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Spinner,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

export function DetalhesProdutos() {
  const { id } = useParams();
  const produtos = useProducts();

  const [quantidade, setQuantidade] = useState(1);

  const aumentarQuantidade = () => setQuantidade((prev) => prev + 1);
  const diminuirQuantidade = () =>
    setQuantidade((prev) => (prev > 1 ? prev - 1 : 1));

  if (produtos.length === 0) {
    return (
      <Box
        bg="D9D9D9"
        w="100vw"
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size="xl" color="#236D83" />
      </Box>
    );
  }

  const produto = produtos.find((p) => p.id === parseInt(id));

  if (!produto) {
    return (
      <Box
        bg="#D9D9D9"
        w="100vw"
        minH="100vh"
        p="6"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Heading size="md">Produto não encontrado</Heading>
      </Box>
    );
  }

  const handleAdicionarAoCarrinho = () => {
    console.log(
      `Adicionado ao carrinho: ${produto.nome} (Quantidade: ${quantidade})`,
    );
  };

  return (
    <Box bg="#D9D9D9" w="100vw" minH="100vh" p="6">
      <Box maxW="1000px" mx="auto">
        <Button
          as={RouterLink}
          to="/"
          mb="6"
          colorScheme="blue"
          variant="outline"
        >
          Voltar
        </Button>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap="10"
          align="flex-start"
          p="8"


        >
          <Box flex="1" width="100%">
            <Image
              src={`/img/${produto.imagem}`}
              alt={produto.nome}
              maxH="500px"
              width="100%"
              objectFit="contain"
              borderRadius="md"
              mb="6"
            />
          </Box>

          <Box flex="1" width="100%">
            <Heading size="lg" mb="3" color="#236D83">
              {produto.nome}
            </Heading>
            <Text fontSize="lg" mb="2">
              <strong>Marca:</strong> {produto.marca}
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="blue.900" mb="2">
              {produto.preco}
            </Text>
            <Text fontSize="lg" color="blue.600" fontWeight="bold">
              {produto.precopix}
            </Text>
            <Text>Escala: 32mm</Text>
            <Text>Impressão 3D em resina</Text>

            <Flex gap="4" align="center" mt="6" mb="4" flexWrap="wrap">
              <HStack
                maxW="140px"
                borderWidth="1px"
                borderRadius="md"
                borderColor="gray.400"
                p="1"
                bg="white"
              >
                <Button
                  size="sm"
                  onClick={diminuirQuantidade}
                  variant="ghost"
                  colorScheme="blue"
                >
                  -
                </Button>
                <Text px="2" fontWeight="bold" minW="30px" textAlign="center">
                  {quantidade}
                </Text>
                <Button
                  size="sm"
                  onClick={aumentarQuantidade}
                  variant="ghost"
                  colorScheme="blue"
                >
                  +
                </Button>
              </HStack>
              <Button
                colorScheme="blue"
                size="lg"
                flex="1"
                minW="200px"
                onClick={handleAdicionarAoCarrinho}
              >
                Adicionar ao Carrinho
              </Button>
            </Flex>

            <Text fontSize="sm" color="gray.600">
              Compre e cancele quando quiser.
            </Text>
            <Text fontSize="sm" color="gray.600">
              Sua compra está protegida, cancele gratuitamente se você se
              arrepender.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
