import React, { useState } from "react";
import { Flex, Box, Heading, CircularProgress, CircularProgressLabel, Grid, Button, SimpleGrid, Text } from '@chakra-ui/react'
import { FaBed } from 'react-icons/fa';
import { IoFastFoodSharp, IoGameControllerSharp, IoSchoolSharp } from 'react-icons/io5';


export default function UserStatus() {
    return (
        <Flex className="Body" align='center' gap='20px' padding={{ base: '4' }} direction='column'>
            <Grid className="StatusBox" templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(4, 1fr)' }} justifyContent='center' align='center' borderRadius='3' bg='#2f3e46' px='4' py='2' gap='2'>
                <CircularProgress value={0} color='#7678ed' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                            <IoSchoolSharp />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={30} color='#7678ed' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                            <IoGameControllerSharp />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={30} color='#7678ed' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                            <FaBed />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={30} color='#7678ed' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center' color='#EAE0D5'>
                            <IoFastFoodSharp />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
            </Grid>
            <SimpleGrid columns={{ base: '2', md: '2' }} spacing='10px' color='#2f3e46' bg='#2f3e46' padding='3' borderRadius='3'>
                <Button size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                    Makan
                </Button>
                <Button size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                    Main
                </Button>
                <Button size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                    Tidur
                </Button>
                <Button size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                    Belajar
                </Button>
            </SimpleGrid >
            <SimpleGrid columns={{ base: '2', md: '2' }} spacing='10px' color='#2f3e46' bg='#2f3e46' padding='3' borderRadius='3'>
                <Text as='kbd' fontSize={{ base: 'md', lg: 'lg' }} color='#EAE0D5'>Go To:</Text>
                <Button size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                    Kampus
                </Button>
                <Button size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                    Hiling
                </Button>
                <Button size='sm' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} variant='solid'>
                    Cafe
                </Button>
            </SimpleGrid >

        </Flex >
    )
};