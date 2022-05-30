import React, { useContext, useEffect, useState } from "react";
import { Heading, SimpleGrid, Image, Text, Grid, Flex, Box, Button, CircularProgress, Stack, CircularProgressLabel } from '@chakra-ui/react'
import { userContext } from "../UserContext";
import Home_pagi from "../Asset/BackgroundAsset/Home_pagi.png";
import { FaBed } from 'react-icons/fa';
import { IoFastFoodSharp, IoGameControllerSharp, IoSchoolSharp } from 'react-icons/io5';

function Game() {
    const { userData } = useContext(userContext);
    //USESTATE PROGRESS BAR==============//
    const [makan, setMakan] = useState(0);
    const [belajar, setBelajar] = useState(0);
    const [main, setMain] = useState(0);
    const [tidur, setTidur] = useState(0);

    //USESTATE BUTTON===================//
    const [button, setButton] = useState("");
    const [buttonMakan, setButtonMakan] = useState(true);
    const [buttonBelajar, setButtonBelajar] = useState(true);
    const [buttonMain, setButtonMain] = useState(true);
    const [buttonTidur, setButtonTidur] = useState(true);

    const updateStatusBar = (status) => {
        if (status === "") {
            setMakan((prevCounter) => prevCounter - 1);
            setMain((prevCounter) => prevCounter - 1);
            setTidur((prevCounter) => prevCounter - 1);
        }
        else if (status === "makan") {
            setMakan((prevCounter) => prevCounter + 1);
            setMain((prevCounter) => prevCounter - 1);
            setTidur((prevCounter) => prevCounter - 1);
        }
        else if (status === "main") {
            setMakan((prevCounter) => prevCounter - 1);
            setMain((prevCounter) => prevCounter + 1);
            setTidur((prevCounter) => prevCounter - 1);
        }
        else if (status === "belajar") {
            setMakan((prevCounter) => prevCounter - 1);
            setBelajar((prevCounter) => prevCounter + 1);
            setMain((prevCounter) => prevCounter - 1);
            setTidur((prevCounter) => prevCounter - 1);
        }
    }

    function handleClickMakan() {
        setButtonBelajar(true);
        setButtonMain(true);
        setButtonTidur(true);

        if (setButtonMakan) {
            setButton("makan");
        } else {
            setButton("");
        }
        setButtonMakan(!buttonMakan);
    }

    function handleClickMain() {
        setButtonBelajar(true);
        setButtonMakan(true);
        setButtonTidur(true);

        if (setButtonMain) {
            setButton("main");
        } else {
            setButton("");
        }
        setButtonMain(!buttonMain);
    }

    function handleClickBelajar() {
        setButtonMain(true);
        setButtonMakan(true);
        setButtonTidur(true);

        if (setButtonBelajar) {
            setButton("belajar");
        } else {
            setButton("");
        }
        setButtonBelajar(!buttonBelajar);
    }

    function handleClickTidur() {
        setButtonMain(true);
        setButtonMakan(true);
        setButtonBelajar(true);

        if (setButtonTidur) {
            setButton("tidur");
        } else {
            setButton("");
        }
        setButtonTidur(!buttonTidur);
    }



    useEffect(() => {
        const interval = setInterval(() => {
            updateStatusBar(button);
        }, 1000);
        return () => clearInterval(interval);
    })

    return (
        <Flex className="Bungkus" h='100vh' bgImage={Home_pagi} bgSize='cover' bgPosition='center' color='#712B75' direction='column'>
            <Flex className="Header" justifyContent='center' >
                <Flex className="Jam" bg='#2f3e46' color='#EAE0D5' w='100vw' px='10' py='6' >
                    <Heading as='h4' py='2' size='md' >Rabu, 09:00</Heading>
                </Flex>
            </Flex>
            <Flex className="Body2" justifyContent='center' gap={{ base: '0', md: '50', lg: '100' }} direction={{ base: 'row', md: 'row', lg: 'row' }}>
                <Flex className="Body" justifyContent='center' align='center' gap='20px' padding={{ base: '2' }} direction='column'>
                    <Box className="UserBar" color='#EAE0D5' borderRadius='3' bg='#2f3e46' textAlign='left' direction='column' w='full' px='4' py='2' flexGrow='1'>
                        <Text fontSize='mg'>Selamat Pagi, {userData.name}</Text>
                        <Text as='i' fontSize='mg'>{userData.jurusan}</Text>
                    </Box>
                    <Box justifyContent='center' color='#712B75' align='center' >
                        <Image
                            boxSize={{ base: '180px', md: '200px', lg: '240px' }}
                            objectFit='cover'
                            src='https://cdn.discordapp.com/attachments/946960873686188093/978883459672047676/c1.png'
                        />
                    </Box>
                </Flex>
                <Flex className="Body" align='center' gap='20px' padding={{ base: '2' }} direction='column'>
                    <Grid className="StatusBox" templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(4, 1fr)' }} justifyContent='center' align='center' borderRadius='3' bg='#2f3e46' px='4' py='2' gap='2'>
                        <CircularProgress value={0 + belajar} color='#7678ed' thickness='16px' >
                            <CircularProgressLabel fontSize='2xl'>
                                <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                                    <IoSchoolSharp />
                                </Box>
                            </CircularProgressLabel>
                        </CircularProgress>
                        <CircularProgress value={50 + main} color='#7678ed' thickness='16px' >
                            <CircularProgressLabel fontSize='2xl'>
                                <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                                    <IoGameControllerSharp />
                                </Box>
                            </CircularProgressLabel>
                        </CircularProgress>
                        <CircularProgress value={50 + tidur} color='#7678ed' thickness='16px' >
                            <CircularProgressLabel fontSize='2xl'>
                                <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                                    <FaBed />
                                </Box>
                            </CircularProgressLabel>
                        </CircularProgress>
                        <CircularProgress value={50 + makan} color='#7678ed' thickness='16px' >
                            <CircularProgressLabel fontSize='2xl'>
                                <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                                    <IoFastFoodSharp />
                                </Box>
                            </CircularProgressLabel>
                        </CircularProgress>
                    </Grid>
                    <SimpleGrid columns={{ base: '2', md: '2' }} spacing='10px' color='#2f3e46' bg='#2f3e46' padding='3' borderRadius='3'>
                        <Button onClick={handleClickBelajar} size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                            Belajar
                        </Button>
                        <Button onClick={handleClickMain} size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                            Main
                        </Button>
                        <Button onClick={handleClickTidur} size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                            Tidur
                        </Button>
                        <Button onClick={handleClickMakan} size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                            Makan
                        </Button>
                    </SimpleGrid >
                    <Flex flexWrap='wrap' w='180px' flexDir='row' justifyContent='center' gap='15px' color='#2f3e46' bg='#2f3e46' padding='3' borderRadius='3'>
                        <Button size='sm' w='70px' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                            Kampus
                        </Button>
                        <Button size='sm' w='70px' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                            Hiling
                        </Button>
                        <Button size='sm' w='70px' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                            Cafe
                        </Button>
                    </Flex >
                </Flex >
            </Flex>
        </Flex >
    )
}

export default Game;