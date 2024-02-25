import React from "react";
import { chakra, Box, Flex, Icon, Stack } from "@chakra-ui/react";

function Services() {
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
                Advanced API Services
              </chakra.p>
              <chakra.p
                mt={4}
                maxW="2xl"
                fontSize="xl"
                mx={{ lg: "auto" }}
                color="gray.500"
                _dark={{ color: "gray.400" }}
              >
                Job Searches, Hackathons, Scholarship Oppurtunities, etc.
              </chakra.p>
            </Box>

            <Box mt={10}>
              <Stack
                spacing={{ base: 10, md: 0 }}
                display={{ md: "grid" }}
                gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                gridColumnGap={{ md: 8 }}
                gridRowGap={{ md: 10 }}
              >
                <Feature
                  title="Job Searches"
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  }
                >
                  Discover job opportunities designed to support and empower
                  women in their careers. We partner with companies committed to
                  diversity and inclusion, offering a range of roles from
                  flexible work options to leadership positions. Join us to find
                  the right fit for your professional journey.
                </Feature>
                <Feature
                  title="Intuitive user interface "
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  }
                >
                  Experience an intuitive user interface designed to make
                  navigating our web app a breeze. Our user-friendly interface
                  ensures easy access to all features and functionalities,
                  allowing you to effortlessly explore and utilize our platform.
                  Simplify your experience and maximize productivity with our
                  intuitive interface.
                </Feature>
                <Feature
                  title="Women Empowered Hackathons"
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  }
                >
                  Elevate women in tech at our Women-Empowered Hackathons! Join
                  us for collaborative coding, innovation, and empowerment. All
                  skill levels welcome. Stay tuned for upcoming events and be
                  part of the movement.
                </Feature>

                <Feature
                  title="Scholarship Oppurtunities"
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  }
                >
                  Explore Scholarship Opportunities with Us! Unlock your
                  potential and pursue your dreams with our range of scholarship
                  programs. From academic excellence to community service, we
                  offer opportunities to support your educational journey.
                  Discover how you can achieve your goals and make a difference
                  with our scholarships. Apply now and invest in your future!
                </Feature>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Services;
