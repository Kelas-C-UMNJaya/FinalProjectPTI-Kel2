import React, { useContext, useEffect, useState } from "react";
import { SimpleGrid, Image, Text, Grid, Flex, Box, Button, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { userContext } from "../UserContext";
import Home_pagi from "../Asset/BackgroundAsset/Home_pagi.png";
import { FaBed } from 'react-icons/fa';
import { IoFastFoodSharp, IoGameControllerSharp, IoSchoolSharp } from 'react-icons/io5';
import Jam from "./Jam";

//AVATAR IMPORT 
import c1 from '../Asset/AvatarAsset/c1.png'
import c2 from '../Asset/AvatarAsset/c2.png'
import c3 from '../Asset/AvatarAsset/c3.png'
import c4 from '../Asset/AvatarAsset/c4.png'
import c5 from '../Asset/AvatarAsset/c5.png'

function Game() {
    const { userData, curr } = useContext(userContext);
    //USESTATE PROGRESS BAR==============//
    const [makan, setMakan] = useState(50);
    const [belajar, setBelajar] = useState(0);
    const [main, setMain] = useState(50);
    const [tidur, setTidur] = useState(50);

    //BUTTON BACKGROUND COLOR==============//
    const [bgMakan, setBgMakan] = useState("#EAE0D5");
    const [bgMain, setBgMain] = useState("#EAE0D5");
    const [bgTidur, setBgTidur] = useState("#EAE0D5");
    const [bgBelajar, setBgBelajar] = useState("#EAE0D5");

    //USESTATE BUTTON===================//
    const [button, setButton] = useState("");
    const [buttonMakan, setButtonMakan] = useState(true);
    const [buttonBelajar, setButtonBelajar] = useState(true);
    const [buttonMain, setButtonMain] = useState(true);
    const [buttonTidur, setButtonTidur] = useState(true);

    //AVATAR USESTATE===================//
    const [avatarProfil, setAvatarProfil] = useState();

    useEffect(() => {
        if (curr === 0) {
            setAvatarProfil(c1);
        } else if (curr === 1) {
            setAvatarProfil(c2);
        } else if (curr === 2) {
            setAvatarProfil(c3);
        } else if (curr === 3) {
            setAvatarProfil(c4);
        } else if (curr === 4) {
            setAvatarProfil(c5);
        }
    }, []);


    function updateStatus(val, callback, rate, movement) {
        if (movement === "naik" && (val + rate) <= 100) {
            callback((prevVal) => prevVal + rate);
            return;
        }
        else if (movement === "turun" && (val - rate) >= 0) {
            callback((prevVal) => prevVal - rate);
            return;
        } else {
            callback(val < 0 ? 0 : val > 100 ? 100 : val);
            return;
        }

    }

    const updateStatusBar = (status) => {
        if (status === "") {
            updateStatus(makan, setMakan, 1, "turun");
            updateStatus(main, setMain, 1, "turun");
            updateStatus(tidur, setTidur, 0.5, "turun");
        }
        else if (status === "makan") {
            updateStatus(makan, setMakan, 8, "naik");
            updateStatus(main, setMain, 1, "turun");
            updateStatus(tidur, setTidur, 1, "turun");
        }
        else if (status === "main") {
            updateStatus(makan, setMakan, 2, "turun");
            updateStatus(main, setMain, 4, "naik");
            updateStatus(tidur, setTidur, 1, "turun");
        }
        else if (status === "belajar") {
            updateStatus(makan, setMakan, 1.5, "turun");
            updateStatus(main, setMain, 2, "turun");
            updateStatus(tidur, setTidur, 1, "turun");
            updateStatus(belajar, setBelajar, 4, "naik");
            if (belajar >= 100) {
                setBelajar(0);
                setBgBelajar("#EAE0D5");
                setButton("");
            }
        }
        else if (status === "tidur") {
            updateStatus(makan, setMakan, 1, "turun");
            updateStatus(main, setMain, 1, "turun");
            updateStatus(tidur, setTidur, 5, "naik");
        }
    }

    function handleClickMakan() {
        setButtonBelajar(true);
        setButtonMain(true);
        setButtonTidur(true);

        if (buttonMakan) {
            setButton("makan");
            setBgMakan("#7678ed");
            setBgBelajar("#EAE0D5");
            setBgMain("#EAE0D5");
            setBgTidur("#EAE0D5");
        } else {
            setButton("");
            setBgMakan("#EAE0D5");
        }
        setButtonMakan(!buttonMakan);
    }

    function handleClickMain() {
        setButtonBelajar(true);
        setButtonMakan(true);
        setButtonTidur(true);

        if (buttonMain) {
            setButton("main");
            setBgMain("#7678ed");
            setBgBelajar("#EAE0D5");
            setBgMakan("#EAE0D5");
            setBgTidur("#EAE0D5");
        } else {
            setButton("");
            setBgMain("#EAE0D5");
        }
        setButtonMain(!buttonMain);
    }

    function handleClickBelajar() {
        setButtonMain(true);
        setButtonMakan(true);
        setButtonTidur(true);

        if (buttonBelajar) {
            setButton("belajar");
            setBgBelajar("#7678ed");
            setBgMakan("#EAE0D5");
            setBgMain("#EAE0D5");
            setBgTidur("#EAE0D5");
        } else {
            setButton("");
            setBgBelajar("#EAE0D5");
        }
        setButtonBelajar(!buttonBelajar);
    }

    function handleClickTidur() {
        setButtonMain(true);
        setButtonMakan(true);
        setButtonBelajar(true);

        if (buttonTidur) {
            setButton("tidur");
            setBgTidur("#7678ed");
            setBgMakan("#EAE0D5");
            setBgMain("#EAE0D5");
            setBgBelajar("#EAE0D5");
        } else {
            setButton("");
            setBgTidur("#EAE0D5");
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
                <Flex className="Jam" bg='#2f3e46' color='#EAE0D5' w='100vw' px='4' py='3'>
                    <Jam />
                </Flex>
            </Flex>
            <Flex className="Body2" justifyContent='center' gap={{ base: '0', md: '100', lg: '100' }} direction={{ base: 'row', md: 'row', lg: 'row' }}>
                <Flex className="Body" justifyContent='center' align='center' gap='20px' padding={{ base: '2' }} direction='column'>
                    <Box className="UserBar" color='#EAE0D5' borderRadius='3' bg='#2f3e46' textAlign='left' direction='column' w='full' px='4' py='2' flexGrow='1'>
                        <Text fontSize='mg'>Selamat Pagi, {userData.name}</Text>
                        <Text as='i' fontSize='mg'>{userData.jurusan}</Text>
                    </Box>
                    <Box justifyContent='center' color='#712B75' align='center' >
                        <Image
                            boxSize={{ base: '180px', md: '200px', lg: '240px' }}
                            objectFit='cover'
                            src={avatarProfil}
                        />
                    </Box>
                </Flex>
                <Flex className="Body" align='center' gap='20px' padding={{ base: '2' }} direction='column'>
                    <Grid className="StatusBox" templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(4, 1fr)' }} justifyContent='center' align='center' borderRadius='3' bg='#2f3e46' px='4' py='2' gap='2'>
                        <CircularProgress value={belajar} color='#7678ed' thickness='16px' >
                            <CircularProgressLabel fontSize='2xl'>
                                <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                                    <IoSchoolSharp />
                                </Box>
                            </CircularProgressLabel>
                        </CircularProgress>
                        <CircularProgress value={main} color='#7678ed' thickness='16px' >
                            <CircularProgressLabel fontSize='2xl'>
                                <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                                    <IoGameControllerSharp />
                                </Box>
                            </CircularProgressLabel>
                        </CircularProgress>
                        <CircularProgress value={tidur} color='#7678ed' thickness='16px' >
                            <CircularProgressLabel fontSize='2xl'>
                                <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                                    <FaBed />
                                </Box>
                            </CircularProgressLabel>
                        </CircularProgress>
                        <CircularProgress value={makan} color='#7678ed' thickness='16px' >
                            <CircularProgressLabel fontSize='2xl'>
                                <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                                    <IoFastFoodSharp />
                                </Box>
                            </CircularProgressLabel>
                        </CircularProgress>
                    </Grid>
                    <SimpleGrid columns={{ base: '2', md: '2' }} spacing='10px' color='#2f3e46' bg='#2f3e46' padding='3' borderRadius='3'>
                        <Button onClick={handleClickBelajar} size='sm' bg={bgBelajar} _hover={{ bg: '#7678ed' }} variant='solid'>
                            Belajar
                        </Button>
                        <Button onClick={handleClickMain} size='sm' bg={bgMain} _hover={{ bg: '#7678ed' }} variant='solid'>
                            Main
                        </Button>
                        <Button onClick={handleClickTidur} size='sm' bg={bgTidur} _hover={{ bg: '#7678ed' }} variant='solid'>
                            Tidur
                        </Button>
                        <Button onClick={handleClickMakan} size='sm' bg={bgMakan} _hover={{ bg: '#7678ed' }} variant='solid'>
                            Makan
                        </Button>
                    </SimpleGrid >
                    <Flex flexWrap='wrap' w='175px' flexDir='row' justifyContent='center' gap='15px' color='#2f3e46' bg='#2f3e46' padding='3' borderRadius='3'>
                        <Button size='sm' w='65px' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                            Kampus
                        </Button>
                        <Button size='sm' w='65px' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                            Hiling
                        </Button>
                        <Button size='sm' w='65px' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                            Cafe
                        </Button>
                    </Flex >
                </Flex >
            </Flex>
        </Flex >
    )
}

export default Game;