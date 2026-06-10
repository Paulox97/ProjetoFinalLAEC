import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button} from "@chakra-ui/react";


export function ProductCard({produto, onAdd}){
    const {nome, preco, marca, imagem} = produto;
    console.log(onAdd)

    return(
        <Card maxW='sm' h="100%">
  <CardBody>
    <Image
      src={`/img/${imagem}`}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Text>{nome}</Text>
      <Text>{marca}</Text>
      <Text color='blue.600' fontSize='2xl'>{preco}</Text>
    </Stack>
  </CardBody>
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={onAdd}>
        Adicionar ao carrinho
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    )
}