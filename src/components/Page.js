import React from "react";
import { chakra, Box, useColorModeValue, Icon, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Page() {
    const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box pos="relative" overflow="hidden" bg={bg} mt={0}>
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          maxW={{ lg: "2xl" }}
          w={{ lg: "full" }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{ base: "none", lg: "block" }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 8, sm: 10, md: 14, lg: 18, xl: 26 }}
          >
            <Box
              w="full"
              textAlign={{ sm: "center", lg: "left" }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color="gray.900"
                _dark={{ color: "white" }}
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  Empowering Women in STEM:,{" "}
                </chakra.span>
                <chakra.span
                  display={{ base: "block", xl: "inline" }}
                  color="brand.600"
                  _dark={{ color: "brand.400" }}
                >
                  Bridging the Gender Gap and Breaking Barriers.
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                color="gray.500"
              >
                Welcome to our groundbreaking initiative aimed at empowering
                women in male-dominated fields, particularly in STEM (Science,
                Technology, Engineering, and Mathematics). Our mission is to
                provide women with the resources, support, and opportunities
                they need to excel and thrive in these traditionally
                male-dominated industries. Through mentorship programs,
                networking events, skill-building workshops, and advocacy
                efforts, we're committed to breaking down barriers and fostering
                a more inclusive and diverse STEM community. Join us in shaping
                the future of STEM and empowering women to reach their full
                potential!
              </chakra.p>
              <Box
                mt={{ base: 5, sm: 8 }}
                display={{ sm: "flex" }}
                justifyContent={{ sm: "center", lg: "start" }}
                fontWeight="extrabold"
                fontFamily="fantasy"
              >
                <Box rounded="full" shadow="md">
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="solid 1px transparent"
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color="black"
                    letterSpacing={"3px"}
                    bg="brand.600"
                    _hover={{ color: "#0e76fd" }}
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    cursor="pointer"
                    onClick={() => navigate('sign-up')}
                    target="_blank"
                  >
                    Get started
                  </chakra.a>
                </Box>
                <Box mt={[3, 0]} ml={[null, 3]}>
                 
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{ lg: "absolute" }}
        top={{ lg: 0 }}
        bottom={{ lg: 0 }}
        right={{ lg: 0 }}
        w={{ lg: "50%" }}
        border="solid 1px transparent"
      >
        <Image
          h="84%"
          w="full"
          fit="cover"
          src="/final.png"
          alt=""
          loading="lazy"
        />
      </Box>
    </Box>
  );
}
