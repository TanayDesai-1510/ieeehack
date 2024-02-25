import React from "react";
import { ChakraProvider, Box, Text, Button, Flex, Icon, chakra } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


function GetStarted() {
  const navigate = useNavigate();

  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            _light={{ bg: "brand.500" }}
            color="white"
          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            _light={{ color: "gray.900" }}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.400" }}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <div>
      <Flex
        bg="#edf3f8"
        _dark={{ bg: "#3e3e3e" }}
        p={20}
        w="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Box py={12} bg="white" _dark={{ bg: "gray.800" }} rounded="xl" shadow="xl">
          <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
            <Box textAlign={{ lg: "center" }}>
              <chakra.p
                mt={2}
                fontSize={{ base: "3xl", sm: "4xl" }}
                lineHeight="8"
                fontWeight="extrabold"
                letterSpacing="tight"
                _light={{ color: "gray.900" }}
              >
                Get Started
              </chakra.p>
              <Box maxW="400px" mx="auto" mt="10" p="6" textAlign="center">
                <Text fontSize="xl" fontWeight="bold" mb="4">
                  Get Started with Your Journey
                </Text>
                <Text mb="4">
                  Start your journey by creating an account with us. If you
                  already have an account, simply log in and start exploring!
                </Text>
                <Button colorScheme="teal" size="lg" width="100%" onClick={() => navigate('/sign-up')}>
                  Get Started
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default GetStarted;

{
  /* <ChakraProvider>
      <Box maxW="400px" mx="auto" mt="10" p="6" textAlign="center">
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Get Started with Your Journey
        </Text>
        <Text mb="4">
          Start your journey by creating an account with us. If you already have an account, simply log in and start exploring!
        </Text>
        <Button colorScheme="teal" size="lg" width="100%">
          Get Started
        </Button>
      </Box>
    </ChakraProvider> */
}
