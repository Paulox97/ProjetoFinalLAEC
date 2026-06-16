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
  Divider,
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
    <Box bg="#D9D9D9" w="100vw" minH="100vh" p="6" pt="180px">
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

          <Flex flex="1" width="100%" direction="column" alignItems="flex-start" textAlign="left">
            <Heading size="lg" mb="3" color="#000000">
              {produto.nome}
            </Heading>

            <Text fontSize="40px" fontWeight="bold" color="#1A365D" mb="-1">
              {produto.preco}
            </Text>
            <Text fontSize="25px" color="#236D83" fontWeight="bold" mb="6">
              {produto.precopix}
            </Text>

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
                borderRadius="30px"
              >
                Adicionar ao Carrinho
              </Button>
            </Flex>

            <Text fontSize="sm" fontWeight="bold" mt="10">
              Compre e cancele quando quiser.
            </Text>
            <Text fontSize="sm" color="gray.600">
              Sua compra está protegida, cancele gratuitamente se você se
              arrepender.
            </Text>
          </Flex>
        </Flex>

        <Flex p="8" pt="0" direction="column" alignItems="flex-start" textAlign="left">

          <Divider borderColor="gray.400" mb="6" />

          <Heading size="md" mb="3" mt="2" color="#000000"> Descrição do Produto </Heading>
          <Text fontSize="md" color="#000000" lineHeight="tall" mb="6">
            Leve as suas sessões de RPG para o próximo nível com miniaturas de altíssima definição! Seja você um mestre querendo surpreender seus jogadores com um mestre de calabouço aterrorizante, ou um jogador querendo dar vida ao seu herói, esta peça é o que falta na sua mesa.
          </Text>

          <Heading size="md"  mb="3" color="#000000"> Diferenciais do Nosso Produto </Heading>
          <Text fontSize="md" color="#000000" lineHeight="tall" mb="3">
            Impressa com tecnologia de resina/filamento de ponta, capturando cada expressão, textura de armadura e detalhes da arma.
          </Text>
          <Text fontSize="md" color="#000000" lineHeight="tall" mb="3">
            A peça passa por um processo de pós-cura e limpeza detalhado. Ela vai pronta para receber primer e as tintas da sua preferência.
          </Text>
          <Text fontSize="md" color="#000000" lineHeight="tall" mb="6">
            Utilizamos materiais selecionados para garantir uma boa durabilidade durante o manuseio nas jogatinas.
          </Text>

          <Heading size="md"  mb="3" color="#000000">Especificações Técnicas</Heading>
          <Text fontSize="md" color="#000000" lineHeight="short" mb="2">Material:	Resina de Alta Definição (ou Plástico ABS/PLA premium)</Text>
          <Text fontSize="md" color="#000000" lineHeight="short" mb="2">Escala Padrão:	28mm / 32mm (Heroic Scale — Ideal para D&D, Pathfinder, Tormenta)</Text>
          <Text fontSize="md" color="#000000" lineHeight="short" mb="2">Base:	Adquirida separadamente</Text>
          <Text fontSize="md" color="#000000" lineHeight="short" mb="2">Cor do Material:	Geralmente Cinza (perfeita para visualização dos detalhes antes da pintura)</Text>
        </Flex>

      </Box>
    </Box>
  );
}
