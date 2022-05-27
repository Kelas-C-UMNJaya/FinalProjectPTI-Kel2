import React from "react";
import { Text, Heading, Image, Flex, Center, Box, Button, CircularProgress, Stack, CircularProgressLabel } from '@chakra-ui/react'

function Header() {
    return (
        <Box className="Header" justifyContent='center'>
            <Box className="Jam" h='30px' bg='#A0BCC2'>
                <Heading as='h5' size='mg' mx='2'>Rabu, 09:00</Heading>
            </Box>
        </Box>
    )
}
export default Header;