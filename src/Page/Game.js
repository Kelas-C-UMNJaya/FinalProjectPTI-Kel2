import React, { useContext, useEffect, useState } from "react";
import { SimpleGrid, Image, Text, Grid, Flex, Box, Button, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { userContext } from "../UserContext";
import Home_pagi from "../Asset/BackgroundAsset/Home_pagi.png";
import { FaBed } from 'react-icons/fa';
import { IoFastFoodSharp, IoGameControllerSharp, IoSchoolSharp } from 'react-icons/io5';
import Jam from "./Jam";

//AVATAR 1===============================// 
import c1 from '../Asset/AvatarAsset/c1.png'
import c1_belajar from '../Asset/AvatarAsset/c1_belajar.png'
import c1_makan from '../Asset/AvatarAsset/c1_makan.png'
import c1_main from '../Asset/AvatarAsset/c1_main.png'
import c1_tidur from '../Asset/AvatarAsset/c1_tidur.png'

//AVATAR 2===============================//
import c2 from '../Asset/AvatarAsset/c2.png'
import c2_belajar from '../Asset/AvatarAsset/c2_belajar.png'
import c2_makan from '../Asset/AvatarAsset/c2_makan.png'
import c2_main from '../Asset/AvatarAsset/c2_main.png'
import c2_tidur from '../Asset/AvatarAsset/c2_tidur.png'

//AVATAR 3===============================//
import c3 from '../Asset/AvatarAsset/c3.png'
import c3_belajar from '../Asset/AvatarAsset/c3_belajar.png'
import c3_makan from '../Asset/AvatarAsset/c3_makan.png'
import c3_main from '../Asset/AvatarAsset/c3_main.png'
import c3_tidur from '../Asset/AvatarAsset/c3_tidur.png'

//AVATAR 4===============================//
import c4 from '../Asset/AvatarAsset/c4.png'
import c4_belajar from '../Asset/AvatarAsset/c4_belajar.png'
import c4_makan from '../Asset/AvatarAsset/c4_makan.png'
import c4_main from '../Asset/AvatarAsset/c4_main.png'
import c4_tidur from '../Asset/AvatarAsset/c4_tidur.png'

//AVATAR 5===============================//
import c5 from '../Asset/AvatarAsset/c5.png'
import c5_belajar from '../Asset/AvatarAsset/c5_belajar.png'
import c5_makan from '../Asset/AvatarAsset/c5_makan.png'
import c5_main from '../Asset/AvatarAsset/c5_main.png'
import c5_tidur from '../Asset/AvatarAsset/c5_tidur.png'

function Game() {
    const { userData, curr, salam } = useContext(userContext);
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
    const [buttonHideBelajar, setButtonHideBelajar] = useState(true);
    const [buttonHideMakan, setButtonHideMakan] = useState(true);
    const [buttonHideMain, setButtonHideMain] = useState(true);
    const [buttonHideTidur, setButtonHideTidur] = useState(true);
    const [buttonKampus, setButtonKampus] = useState(true);
    const [buttonHiling, setButtonHiling] = useState(true);
    const [buttonCafe, setButtonCafe] = useState(true);
    const [kampusActive, setKampusActive] = useState(true);
    const [hilingActive, setHilingActive] = useState(true);
    const [cafeActive, setCafeActive] = useState(true);


    //AVATAR USESTATE===================//
    const [avatarProfil, setAvatarProfil] = useState();

    //GREETINGS USESTATE===================//
    const [greeting, setGreeting] = useState("");

    function greetingHandler() {
        if (salam === "Pagi") {
            setGreeting("Selamat Pagi");
        } else if (salam === "Siang") {
            setGreeting("Selamat Siang");
        } else if (salam === "Sore") {
            setGreeting("Selamat Sore");
        } else if (salam === "Malam") {
            setGreeting("Selamat Malam");
        }
    }

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

    function defaultAvatar() {
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
    }

    function updateStatus(val, callback, rate, movement) {
        if (movement === "naik" && (val + rate) <= 100) {
            callback((prevVal) => prevVal + rate);
            return;
        }
        else if (movement === "turun" && (val - rate) >= 0) {
            callback((prevVal) => prevVal - rate);
            return;
        } else {
            callback(val + rate < 0 ? 0 : val + rate > 100 ? 100 : val);
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
            updateStatus(tidur, setTidur, 0.5, "turun");
        }
        else if (status === "main") {
            updateStatus(makan, setMakan, 2, "turun");
            updateStatus(main, setMain, 5, "naik");
            updateStatus(tidur, setTidur, 1, "turun");
        }
        else if (status === "belajar") {
            updateStatus(makan, setMakan, 1.5, "turun");
            updateStatus(main, setMain, 2, "turun");
            updateStatus(tidur, setTidur, 0.5, "turun");
            updateStatus(belajar, setBelajar, 4, "naik");
            if (belajar >= 100) {
                setBelajar(0);
                setBgBelajar("#EAE0D5");
                setButton("");
                defaultAvatar();
            }
        }
        else if (status === "tidur") {
            updateStatus(makan, setMakan, 0.5, "turun");
            updateStatus(main, setMain, 0.5, "turun");
            updateStatus(tidur, setTidur, 5, "naik");
        }
    }

    function handleClickMakan() {
        setButtonBelajar(true);
        setButtonMain(true);
        setButtonTidur(true);

        if (buttonMakan) {
            if (curr === 0) {
                setAvatarProfil(c1_makan);
            } else if (curr === 1) {
                setAvatarProfil(c2_makan);
            } else if (curr === 2) {
                setAvatarProfil(c3_makan);
            } else if (curr === 3) {
                setAvatarProfil(c4_makan);
            } else if (curr === 4) {
                setAvatarProfil(c5_makan);
            }
            setButton("makan");
            setBgMakan("#7678ed");
            setBgBelajar("#EAE0D5");
            setBgMain("#EAE0D5");
            setBgTidur("#EAE0D5");
        } else {
            setButton("");
            defaultAvatar();
            setBgMakan("#EAE0D5");
        }
        setButtonMakan(!buttonMakan);
    }

    function handleClickMain() {
        setButtonBelajar(true);
        setButtonMakan(true);
        setButtonTidur(true);

        if (buttonMain) {
            if (curr === 0) {
                setAvatarProfil(c1_main);
            } else if (curr === 1) {
                setAvatarProfil(c2_main);
            } else if (curr === 2) {
                setAvatarProfil(c3_main);
            } else if (curr === 3) {
                setAvatarProfil(c4_main);
            } else if (curr === 4) {
                setAvatarProfil(c5_main);
            }
            setButton("main");
            setBgMain("#7678ed");
            setBgBelajar("#EAE0D5");
            setBgMakan("#EAE0D5");
            setBgTidur("#EAE0D5");
        } else {
            setButton("");
            defaultAvatar();
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
            if (curr === 0) {
                setAvatarProfil(c1_belajar);
            } else if (curr === 1) {
                setAvatarProfil(c2_belajar);
            } else if (curr === 2) {
                setAvatarProfil(c3_belajar);
            } else if (curr === 3) {
                setAvatarProfil(c4_belajar);
            } else if (curr === 4) {
                setAvatarProfil(c5_belajar);
            }
            setBgBelajar("#7678ed");
            setBgMakan("#EAE0D5");
            setBgMain("#EAE0D5");
            setBgTidur("#EAE0D5");
        } else {
            setButton("");
            defaultAvatar();
            setBgBelajar("#EAE0D5");
        }
        setButtonBelajar(!buttonBelajar);
    }

    function handleClickTidur() {
        setButtonMain(true);
        setButtonMakan(true);
        setButtonBelajar(true);

        if (buttonTidur) {
            if (curr === 0) {
                setAvatarProfil(c1_tidur);
            } else if (curr === 1) {
                setAvatarProfil(c2_tidur);
            } else if (curr === 2) {
                setAvatarProfil(c3_tidur);
            } else if (curr === 3) {
                setAvatarProfil(c4_tidur);
            } else if (curr === 4) {
                setAvatarProfil(c5_tidur);
            }
            setButton("tidur");
            setBgTidur("#7678ed");
            setBgMakan("#EAE0D5");
            setBgMain("#EAE0D5");
            setBgBelajar("#EAE0D5");
        } else {
            setButton("");
            defaultAvatar();
            setBgTidur("#EAE0D5");
        }
        setButtonTidur(!buttonTidur);
    }

    function handleClickKampus() {
        setButtonHiling(true);
        setButtonCafe(true);
        if (buttonKampus) {
            setKampusActive(false);
            setHilingActive(true);
            setCafeActive(true);
            setButtonHideTidur(false);
            setButtonHideMain(false);
        } else {
            setKampusActive(true);
            setButtonHideTidur(true);
            setButtonHideMain(true);
            setButtonHideMakan(true);
            setButtonHideBelajar(true);
        }
        setButtonKampus(!buttonKampus);
    }

    function handleClickHiling() {
        setButtonKampus(true);
        setButtonCafe(true);
        if (buttonHiling) {
            setHilingActive(false);
            setKampusActive(true);
            setCafeActive(true);
            setButtonHideBelajar(false);
        } else {
            setHilingActive(true);
            setButtonHideTidur(true);
            setButtonHideMain(true);
            setButtonHideMakan(true);
            setButtonHideBelajar(true);

        }
        setButtonHiling(!buttonHiling);
    }

    function handleClickCafe() {
        setButtonKampus(true);
        setButtonHiling(true);
        if (buttonCafe) {
            setCafeActive(false);
            setKampusActive(true);
            setHilingActive(true);
            setButtonHideTidur(false);
        } else {
            setCafeActive(true);
            setButtonHideTidur(true);
            setButtonHideMain(true);
            setButtonHideMakan(true);
            setButtonHideBelajar(true);
        }
        setButtonCafe(!buttonCafe);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            greetingHandler();
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
                        <Text fontSize='mg'>{greeting}, {userData.name}</Text>
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
                        {buttonHideBelajar && (<Button onClick={handleClickBelajar} size='sm' bg={bgBelajar} _hover={{ bg: '#7678ed' }} variant='solid'>
                            Belajar
                        </Button>)}
                        {buttonHideMain && (<Button onClick={handleClickMain} size='sm' bg={bgMain} _hover={{ bg: '#7678ed' }} variant='solid'>
                            Main
                        </Button>)}
                        {buttonHideTidur && (<Button onClick={handleClickTidur} size='sm' bg={bgTidur} _hover={{ bg: '#7678ed' }} variant='solid'>
                            Tidur
                        </Button>)}
                        {buttonHideMakan && (<Button onClick={handleClickMakan} size='sm' bg={bgMakan} _hover={{ bg: '#7678ed' }} variant='solid'>
                            Makan
                        </Button>)}
                    </SimpleGrid >
                    <Flex flexWrap='wrap' w='175px' flexDir='row' justifyContent='center' gap='15px' color='#2f3e46' bg='#2f3e46' padding='3' borderRadius='3'>
                        <Button onClick={handleClickKampus} size='sm' w='65px' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                            {kampusActive ? 'Kampus' : 'Home'}
                        </Button>
                        <Button onClick={handleClickHiling} size='sm' w='65px' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                            {hilingActive ? 'Hiling' : 'Home'}
                        </Button>
                        <Button onClick={handleClickCafe} size='sm' w='65px' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                            {cafeActive ? 'Cafe' : 'Home'}
                        </Button>
                    </Flex>
                </Flex >
            </Flex>
        </Flex >
    )
}

export default Game;