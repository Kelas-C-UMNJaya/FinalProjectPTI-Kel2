import React from "react";
import { Text, Heading, Image, Flex, Center, Box, Button, CircularProgress, Stack, CircularProgressLabel } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Header from "./GameComp/Header";
import { FaBed, FaBookReader } from 'react-icons/fa';
import { IoFastFoodSharp, IoGameControllerSharp, IoSchoolSharp } from 'react-icons/io5';

function Game() {
    return (
        <Box className="Bungkus" h='100vh' bg='#354259' color='#712B75'>
            <Header />
            <Flex className="Body" justifyContent='center' align='center' w='100%' h='120' gap='160'>
                <Box className="UserBar" my='2' h='50px' w='300px' color='#712B75' borderRadius='3' bg='#A0BCC2' textAlign='left'>
                    <Text ml='3'>Selamat Pagi, Jaki Gay</Text>
                    <Text ml='3'>Informatika</Text>
                </Box>
                <Flex className="StatusBox" justifyContent='center' align='center' h='80px' w='300px' gap='5' borderRadius='3' bg='#A0BCC2'>
                    <CircularProgress value={0} color='#2F8F9D' size='55px' thickness='16px' >
                        <CircularProgressLabel fontSize='2xl'>
                            <Box className="Icon" justifyContent='center' align='center'>
                                <IoSchoolSharp />
                            </Box>
                        </CircularProgressLabel>
                    </CircularProgress>
                    <CircularProgress value={30} color='#2F8F9D' size='55px' thickness='16px' >
                        <CircularProgressLabel fontSize='2xl'>
                            <Box className="Icon" justifyContent='center' align='center'>
                                <IoGameControllerSharp />
                            </Box>
                        </CircularProgressLabel>
                    </CircularProgress>
                    <CircularProgress value={30} color='#2F8F9D' size='55px' thickness='16px' >
                        <CircularProgressLabel fontSize='2xl'>
                            <Box className="Icon" justifyContent='center' align='center'>
                                <FaBed />
                            </Box>
                        </CircularProgressLabel>
                    </CircularProgress>
                    <CircularProgress value={30} color='#2F8F9D' size='55px' thickness='16px' >
                        <CircularProgressLabel fontSize='2xl'>
                            <Box className="Icon" justifyContent='center' align='center'>
                                <IoFastFoodSharp />
                            </Box>
                        </CircularProgressLabel>
                    </CircularProgress>
                </Flex>
            </Flex>
            <Flex className="Body2" justifyContent='center' gap='100'>
                <Stack>
                    <Heading as='h4' size='lg' color='#A0BCC2'>Go To:</Heading>
                    <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                        Kampus
                    </Button>
                    <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                        Cafe
                    </Button>
                    <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                        Healing
                    </Button>
                </Stack>
                <Box boxSize='sm' justifyContent='center' color='#712B75' align='center' >
                    <Image
                        boxSize='230px'
                        objectFit='cover'
                        src='https://cdn.discordapp.com/attachments/946960873686188093/978883459672047676/c1.png'
                    />
                </Box>
                <Stack>
                    <Heading as='h5' size='md' color='#A0BCC2'>@ Home:</Heading>
                    <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                        Makan
                    </Button>
                    <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                        Main
                    </Button>
                    <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                        Tidur
                    </Button>
                    <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                        Belajar
                    </Button>
                </Stack>
            </Flex>
        </Box >
    )
}

export default Game;