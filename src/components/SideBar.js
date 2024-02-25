import React from 'react';
import { ChakraProvider, Box, Flex, Spacer, Text, VStack } from '@chakra-ui/react';

function Sidebar() {
  return (
    <ChakraProvider>
      <Flex
        direction="column"
        h="100vh"
        bg="gray.200"
        w={{ base: 'full', md: '64' }}
        boxShadow="lg"
      >
        <Box p="4">
          <Text fontSize="xl" fontWeight="bold">
            Company Name
          </Text>
        </Box>
        <VStack spacing="4" flex="1" overflowY="auto">
          <Box p="4" bg="white" rounded="md">
            <Text>Dashboard</Text>
          </Box>
          <Box p="4" bg="white" rounded="md">
            <Text>Profile</Text>
          </Box>
          <Box p="4" bg="white" rounded="md">
            <Text>Settings</Text>
          </Box>
        </VStack>
        <Spacer />
        <Box p="4">
          <Text textAlign="center">Footer</Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Sidebar;