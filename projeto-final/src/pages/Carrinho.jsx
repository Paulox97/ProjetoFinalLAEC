import React from "react";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Text, Checkbox, Image, Button, IconButton, HStack, Stack, Divider } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export function Carrinho() {
    const { cart, removeProductCart, updateQuantity } = useCart();

    const totalPix = cart.reduce((acc, p) => acc + (p.preco * 0.9 * p.quantidade), 0);
    const totalNormal = cart.reduce((acc, p) => acc + (p.preco * p.quantidade), 0);

    return (
        <Box bg="#D9D9D9" minH="100vh" pt="180px" pb="10" px={{ base: 4, md: 10}}>

            <Flex maxW="1200px" mx="auto" direction={{ base: "column", lg: "row"}} gap="6" align="flex-start">

                {/* Coluna esquerda */}
                <Box bg="white" flex="2" w="100%" borderRadius="sm" p="6" boxShadow="sm">
                
                    <Heading as="h1" size="lg" mb="2" fontWeight="500">
                        Carrinho de compras
                    </Heading>

                    {cart.length === 0 ? (
                        <Text color="gray.500" mt="4">Nenhum item adicionado ao carrinho.</Text>
                    ) : (
                        <Text fontSize="sm" color="gray.500" mb="4">Nenhum item selecionado.</Text>
                    )}

                    <Divider borderColor="gray.300" mb="6" />

                    {/* Mapeamento itens carrinho */}

                    <Stack spacing="6">
                        {cart.map((p) => (
                            <Box key={p.id}>
                                <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="4">

                                    {/* checkbox, imagem e texto */}

                                    <Flex align="center" gap="4" flex="1">
                                        <Checkbox colorScheme="teal" size="lg" />
                                        <Image src={p.imagem || "../img/logo.png"} alt={p.nome} boxSize="100px" objectFit="cover" borderRadius="md" />
                                        <Box>
                                            <Text fontWeight="bold" fontSize="sm" noOfLines={2}>
                                                {p.nome || "Nome do produto"}
                                            </Text>
                                            <Text fontSize="xs" color="orange.400" mt="1">
                                                Estimativa de envio de 4 a 5 dias
                                            </Text>
                                            <Text fontSize="xs" color="gray.600" mt="1">
                                                Entrega: 20 a 24 de maio.
                                            </Text>

                                            <HStack mt="3" spacing="4">
                                                <HStack maxW="120px" border="1px solid" borderColor="gray.300" borderRadius="md" px="2" py="0.5">
                                                    <IconButton
                                                        size="xs" variant="ghost" icon={<MinusIcon w={2} h={2} />}
                                                        onClick={() => updateQuantity(p.id, "decrementar")}
                                                    />
                                                    <Text fontSize="sm" w="20px" textAlign="center">{p.quantidade}</Text>
                                                    <IconButton
                                                        size="xs" variant="ghost" icon={<AddIcon w={2} h={2} />}
                                                        onClick={() => updateQuantity(p.id, "incrementar")}
                                                    />
                                                </HStack>
                                                <Button
                                                    variant="link" size="xs" color="gray.500" fontWeight="normal"
                                                    onClick={() => removeProductCart(p.id)}
                                                >
                                                    Excluir
                                                </Button>
                                            </HStack>
                                        </Box>
                                    </Flex>

                                    <Box textAlign={{ base: "left", md: "right" }} minW="150px">
                                        <Text fontSize="2xl" fontWeight="bold" color="#236D83">
                                            R$ {(p.preco * p.quantidade).toFixed(2)}
                                        </Text>
                                        <Text fontSize="sm" fontWeight="bold" color="#319795">
                                            R$ {((p.preco * 0.9) * p.quantidade).toFixed(2)} no Pix
                                        </Text>
                                    </Box>
                                </Flex>
                                <Divider borderColor="gray.200" mt="6"/>
                            </Box>
                        ))}
                    </Stack>
                </Box>

                    {/* Caixa direita */}

                <Box bg="white" flex="0.9" w="100%" borderRadius="sm" p="6" boxShadow="sm" position={{ lg: "sticky" }} top="140px">
                    {cart.length === 0 ? (
                        <Text fontSize="md" textAlign="center" py="4" color="gray.700">
                            Nenhum item selecionado.
                        </Text>
                    ) : (
                        <Box mb="4">
                            <Text fontSize="sm" color="gray.600">Subtotal ({cart.length} itens):</Text>
                            <Text fontSize="xl" fontWeight="bold" color="#236D83">R$ {totalNormal.toFixed(2)}</Text>
                            <Text fontSize="md" color="teal.500" fontWeight="semibold">Ou R$ {totalPix.toFixed(2)} no Pix</Text>
                        </Box>
                    )}

                    <Button w="100%" bg="#236D83" color="white" borderRadius="full" size="md" mt="2" _hover={{ bg: "#1a5263"}} isDisabled={cart.length === 0}>
                        Fechar Pedido
                    </Button>
                </Box>
            </Flex>
        </Box>
    );
}
