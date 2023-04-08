import React from "react";
import Head from "next/head";
import { Box, Flex, Stack, Text, Button } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>E-Commerce App</title>
      </Head>
      <Box>
        <Flex>
          <Flex>
            <Text>Logo</Text>
            <Stack>
              <Button>Sign In</Button>
              <Button>Sign Out</Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      {children}
    </div>
  );
};
