import React from "react";
import { Text, Heading, Image, Flex, Center, Box, Button, CircularProgress, Stack, CircularProgressLabel } from '@chakra-ui/react'
import { FaBed, FaBookReader } from 'react-icons/fa';
import { IoFastFoodSharp, IoGameControllerSharp, IoSchoolSharp } from 'react-icons/io5';

function UserStatus() {
    return (
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
    )
}
export default UserStatus;