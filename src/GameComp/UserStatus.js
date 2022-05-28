import React, { useContext } from "react";
import { Text, Flex, Box, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { FaBed } from 'react-icons/fa';
import { IoFastFoodSharp, IoGameControllerSharp, IoSchoolSharp } from 'react-icons/io5';
import { userContext } from '../UserContext'

export default function UserStatus() {
    const { userData } = useContext(userContext);
    return (
        <Flex className="Body" justifyContent='center' align='center' w='100%' h='160' gap='150'>
            <Box className="UserBar" my='2' h='70px' w='300px' color='#712B75' borderRadius='3' bg='#A0BCC2' textAlign='left'>
                <Text fontSize='lg' ml='3' mt='6px' >Selamat Pagi, {userData.name}</Text>
                <Text fontSize='lg' ml='3'>{userData.jurusan}</Text>
            </Box>
            <Flex className="StatusBox" justifyContent='center' align='center' h='95px' w='380px' gap='5' borderRadius='3' bg='#A0BCC2'>
                <CircularProgress value={0} color='#2F8F9D' size='70px' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center'>
                            <IoSchoolSharp />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={30} color='#2F8F9D' size='70px' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center'>
                            <IoGameControllerSharp />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={30} color='#2F8F9D' size='70px' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center'>
                            <FaBed />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={30} color='#2F8F9D' size='70px' thickness='16px' >
                    <CircularProgressLabel fontSize='2xl'>
                        <Box className="Icon" justifyContent='center' align='center'>
                            <IoFastFoodSharp />
                        </Box>
                    </CircularProgressLabel>
                </CircularProgress>
            </Flex>
        </Flex>
    )
};