import React from "react";
import {
  chakra,
  Box,
  Flex,
  Icon,
  SimpleGrid,
  Stack,
  GridItem,
  Text,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

function About() {
  const topBg = useColorModeValue("gray.100", "gray.700");
  const { colorMode, toggleColorMode } = useColorMode();
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="brand.500"
            _dark={{ color: "brand.300" }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="bold"
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
        <Box
          shadow="xl"
          bg="white"
          _dark={{ bg: "gray.800" }}
          px={8}
          py={10}
          mx="auto"
          rounded="xl"
        >
          <chakra.p
            mt={2}
            py={5}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            _light={{ color: "gray.900" }}
            textAlign='center'
          >
            About Us
          </chakra.p>
          <SimpleGrid
            alignItems="center"
            columns={{ base: 1, lg: 3 }}
            spacingY={{ base: 10, lg: 32 }}
            spacingX={{ base: 10, lg: 24 }}
          >
            <Box alignSelf="start">
              <chakra.h2
                mb={3}
                py='30px'
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                textAlign={{ base: "center", sm: "left" }}
                _light={{ color: "black" }}
                lineHeight="shorter"
                letterSpacing="tight"
              >
                All-in-one platform
              </chakra.h2>
              <chakra.p
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                textAlign={{ base: "center", sm: "left" }}
                color="gray.600"
                _dark={{ color: "gray.500" }}
              >
                We aim at making Technology accessible to women and help them
                reach one step closer to their goals.
              </chakra.p>
            </Box>
            <GridItem colSpan={2}>
              <Stack
                spacing={{ base: 10, md: 0 }}
                display={{ md: "grid" }}
                gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                gridColumnGap={{ md: 8 }}
                gridRowGap={{ md: 10 }}
              >
                <Feature title="Empowerment">
                  Upliftment of Women around us.{" "}
                </Feature>
                <Feature title="Liberation">
                  Enable Economic Freedom to Women{" "}
                </Feature>
                <Feature title="Security">
                  {" "}
                  Create Solutions For Women Safety.{" "}
                </Feature>
                <Feature title="Inspire">
                  {" "}
                  Make women believe that they can make a difference{" "}
                </Feature>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Flex>
    </div>
  );
}

export default About;
