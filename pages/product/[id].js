import React from "react";
import { useRouter } from "next/router";
import { data } from "../../utils/data";
import {
  Container,
  Flex,
  SimpleGrid,
  Image,
  Heading,
  Stack,
  Box,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = data.products.find((product) => product.id === parseInt(id));
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Container maxW={"container.xl"} mt={"2"}>
      <SimpleGrid columns={[1, 2]} spacing={2}>
        <Flex>
          <Image
            src={`/images${product.image}`}
            rounded={"md"}
            fit={"cover"}
            align={"center"}
            h={"100%"}
            w={{ base: "100%", sm: "400px", lg: "500px" }}
            alt={product.title}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {`$${product.price} USD`}
            </Text>
          </Box>
          <Text
            color={useColorModeValue("gray.500", "gray.400")}
            fontSize={"lg"}
          >
            {product.description}
          </Text>
          <Flex flexGrow={1} alignItems={"end"}>
            <Button
              rounded={"md"}
              width={"full"}
              mt={"8"}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray50")}
              color={useColorModeValue("white", "gray900")}
              textTransform={"uppercase"}
            >
              Add to cart
            </Button>
          </Flex>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ProductPage;
