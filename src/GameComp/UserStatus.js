import React, { useContext, useEffect, useState } from "react";
import { Flex, Box, Heading, CircularProgress, CircularProgressLabel, Grid, Button, SimpleGrid, Text } from '@chakra-ui/react'
import { FaBed } from 'react-icons/fa';
import { IoFastFoodSharp, IoGameControllerSharp, IoSchoolSharp } from 'react-icons/io5';
import { statusContext } from "../StatusContext";

export default function UserStatus() {
    //StatusBar Declare==========================//
    const { makan, main, tidur, belajar } = useContext(statusContext);
    // const [makan, setMakan] = useState(0);
    // const [main, setMain] = useState(0);
    // const [tidur, setTidur] = useState(0);
    // const [belajar, setBelajar] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setMakan((prevCounter) => prevCounter + status.makan.kurang);
    //         setMain((prevCounter) => prevCounter + status.main.kurang);
    //         setTidur((prevCounter) => prevCounter + status.tidur.kurang);
    //         setBelajar((prevCounter) => prevCounter + status.belajar.kurang);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // });

    return (
        <Flex className="Body" align='center' gap='20px' padding={{ base: '2' }} direction='column'>
            <Grid className="StatusBox" templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(4, 1fr)' }} justifyContent='center' align='center' borderRadius='3' bg='#2f3e46' px='4' py='2' gap='2'>
                <CircularProgress value={0 + belajar.stat} color='#7678ed' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                            <IoSchoolSharp />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={50 + main.stat} color='#7678ed' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                            <IoGameControllerSharp />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={50 + tidur.stat} color='#7678ed' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                            <FaBed />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={50 + makan.stat} color='#7678ed' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                            <IoFastFoodSharp />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
            </Grid>
            <SimpleGrid columns={{ base: '2', md: '2' }} spacing='10px' color='#2f3e46' bg='#2f3e46' padding='3' borderRadius='3'>
                <Button size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                    Belajar
                </Button>
                <Button size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                    Main
                </Button>
                <Button size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                    Tidur
                </Button>
                <Button size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
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
    )
};