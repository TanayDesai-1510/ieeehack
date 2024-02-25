import React from 'react';
import { ChakraProvider, Flex, Box, Text, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Stack } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import { useMyContext } from '../Context';
import {Link} from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const context = useMyContext();

  return (
    <Flex justifyContent="space-between" alignItems="center" p={4} bg="teal.500" color="white">
      <Box>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Text fontSize="lg" fontWeight="bold" _hover={{ textDecoration: 'none' }}>oneStopForHER</Text>
        </Link>
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <Stack direction="row" spacing={6}>
          <Link to="/home" >Home</Link>
          { context.isLoggedIn && <Link to="/dashboard" >Dashboard</Link> }
          { context.isLoggedIn && <Link to="/job" >Job Searches</Link> }
          { context.isLoggedIn && <Link to="/hackathons" >Hackathons</Link>}
          { !context.isLoggedIn && <Link to="/about" >About</Link> }
          
          {/* <Text to="/contact" >Contact</Text> */}
          { !context.isLoggedIn && <Link to="/get-started" >Get Started</Link> }
          { !context.isLoggedIn &&  <Link to="/sign-up" >Sign Up</Link> }
          { !context.isLoggedIn && <Link to="/login" >Log in</Link> }

          
        </Stack>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <Text onClick={onOpen} cursor="pointer">
          <HamburgerIcon />
        </Text>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Link to="/home" onClick={onClose}>Home</Link>
              { context.isLoggedIn && <Link to="/dashboard" onClick={onClose}>Dashboard</Link> }
              { context.isLoggedIn && <Link to="/job" onClick={onClose}>Job Searches</Link> }
              { context.isLoggedIn && <Link to="/hackathons" >Hackathons</Link>}
              { !context.isLoggedIn && <Link to="/about" onClick={onClose}>About</Link> }
              
              {/* <Text to="/contact" onClick={onClose}>Contact</Text> */}
              <Link to="/get-started" onClick={onClose}>Get Started</Link>
              { !context.isLoggedIn && <Link to="/sign-up" onClick={onClose}>Sign Up</Link> }
              { !context.isLoggedIn && <Link to="/login" onClick={onClose}>Login</Link> }
              
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
