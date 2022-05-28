import React, { useContext } from "react"
import { Text, Box } from '@chakra-ui/react'
import { userContext } from '../UserContext'

export default function UserBar() {
    const { userData } = useContext(userContext);
    return (
        <Box className="UserBar" my='2' h='50px' w='300px' color='#712B75' borderRadius='3' bg='#A0BCC2' textAlign='left'>
            <Text ml='3'>Selamat Pagi, {userData.name}</Text>
            <Text ml='3'>{userData.jurusan}</Text>
        </Box>
    )
}