import React from "react";
import { Flex, Box, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { FaBed } from 'react-icons/fa';
import { IoFastFoodSharp, IoGameControllerSharp, IoSchoolSharp } from 'react-icons/io5';

export default function UserStatus() {
    return (
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
    )
};