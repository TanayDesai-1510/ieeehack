import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  chakra
} from '@chakra-ui/react';

import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { useMyContext } from '../Context';

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const context = useMyContext();

    const logIn = async(e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            console.log(userCredential);
            navigate('/dashboard');
            context?.setIsLoggedIn(true);
            
        }).catch((err) => {
            alert("Invalid Login Credentials");
            console.log(err);
        })
    }  
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
          py={12}
          bg="white"
          _dark={{ bg: "gray.800" }}
          rounded="xl"
          shadow="xl"
          width='400px'
        >
          <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
            <Box textAlign={{ lg: "center" }}>
              <chakra.p
                mt={2}
                fontSize={{ base: "3xl", sm: "4xl" }}
                lineHeight="8"
                fontWeight="bold"
                letterSpacing="tight"
                _light={{ color: "gray.900" }}
              >
                Log in now
              </chakra.p>
              <Box maxW="400px" mx="auto" mt="10" p="6" textAlign="center">
                <form onSubmit={logIn}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="password" mt="4" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </FormControl>
                  <Button type="submit" colorScheme="teal" mt="6">
                    Log In
                  </Button>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Login
