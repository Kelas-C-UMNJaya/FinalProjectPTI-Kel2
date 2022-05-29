import React, { useContext } from "react";
import { Text, Flex, Box, CircularProgress, CircularProgressLabel, Grid } from '@chakra-ui/react'
import { FaBed } from 'react-icons/fa';
import { IoFastFoodSharp, IoGameControllerSharp, IoSchoolSharp } from 'react-icons/io5';
import { userContext } from '../UserContext'

export default function UserStatus() {
    const { userData } = useContext(userContext);
    return (
        <Flex className="Body" justifyContent='center' align='center' gap={{ base: '30px', md: '50px', lg: '155px' }} padding={{ base: '4' }} direction={{ base: 'column', md: 'row', lg: 'row' }}>
            <Flex className="UserBar" color='#712B75' borderRadius='3' bg='#A0BCC2' textAlign='left' direction='column' px='4' py='2'>
                <Text fontSize='mg'>Selamat Pagi, {userData.name}</Text>
                <Text fontSize='mg'>{userData.jurusan}</Text>
            </Flex>
            <Grid className="StatusBox" templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(4, 1fr)' }} justifyContent='center' align='center' borderRadius='3' bg='#A0BCC2' px='4' py='2' gap='2'>
                <CircularProgress value={0} color='#2F8F9D' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center'>
                            <IoSchoolSharp />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={30} color='#2F8F9D' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center'>
                            <IoGameControllerSharp />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={30} color='#2F8F9D' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center'>
                            <FaBed />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={30} color='#2F8F9D' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center'>
                            <IoFastFoodSharp />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
            </Grid>
        </Flex >
    )
};