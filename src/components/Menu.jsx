import React from 'react';
import { LinkBox, LinkOverlay, Box, Heading, Text, Button, Image} from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from  "../images/logo.png"
export function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        rounded='md'
        as="header"
        align="center"
        justify="space-between"
        p="3"
        bg="teal.500"
        color="white"
      >
        <Box rounded='md'>
          <Link href='/'>
        <Image src={logo} alt='Logo' boxSize='100px' />
          </Link>
        </Box>  
        <Box>
        <Text fontSize="40px" placeContent="left">La mejor opcion para administrarte</Text>
        </Box>

        

        <Box>
          <Button colorScheme='teal' onClick={onOpen}>
            <HamburgerIcon />
          </Button>
        </Box>
      </Flex>

      <Drawer  isOpen={isOpen} placement='right' onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="teal.500"
            color="white"
            fontSize="lg"
            fontWeight="bold"
            textAlign="center">Menu
            </DrawerHeader>

          <DrawerBody>
            <LinkBox as='article' maxW='sm' p='1' borderWidth='1px' bg="teal.200" my="2" rounded='md'>
              <Heading size='md' my='2'>
                <LinkOverlay href='/'>
                  Inicio
                </LinkOverlay>
              </Heading>
            </LinkBox>

            <LinkBox as='article' maxW='sm' p='1' borderWidth='1px' bg="teal.200" my="2" rounded='md'>
              <Heading size='md' my='2'>
                <LinkOverlay href='/about-us'>
                  Sobre Mi
                </LinkOverlay>
              </Heading>
            </LinkBox>

            <LinkBox as='article' maxW='sm' p='1' borderWidth='1px' bg="teal.200" my="2" rounded='md'>
              <Heading size='md' my='2'>
                <LinkOverlay href='/list'>
                  Tareas
                </LinkOverlay>
              </Heading>
            </LinkBox>
          </DrawerBody>

          <DrawerFooter bg="teal.500" p="4">
            <Button variant='outline' mr={3} onClick={onClose} bg="white" p="4">
              Volver  
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

