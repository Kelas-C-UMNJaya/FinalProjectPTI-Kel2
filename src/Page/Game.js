import React from "react";
import { Heading, Image, Flex, Box, Button, CircularProgress, Stack, CircularProgressLabel } from '@chakra-ui/react'
import Header from "../GameComp/Header";
import UserStatus from "../GameComp/UserStatus";


function Game() {
    return (
        <Box className="Bungkus" h='100vh' bg='#354259' color='#712B75'>
            <Header />
            <UserStatus />
            <Flex className="Body2" justifyContent='center' gap='100' h='270'>
                <Stack>
                    <Heading as='h4' size='lg' color='#A0BCC2'>Go To:</Heading>
                    <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                        Kampus
                    </Button>
                    <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                        Cafe
                    </Button>
                    <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                        Healing
                    </Button>
                </Stack>
                <Box boxSize='sm' justifyContent='center' color='#712B75' align='center' >
                    <Image
                        boxSize='240px'
                        objectFit='cover'
                        src='https://cdn.discordapp.com/attachments/946960873686188093/978883459672047676/c1.png'
                    />
                </Box>
                <Stack>
                    <Heading as='h5' size='md' color='#A0BCC2'>@ Home:</Heading>
                    <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                        Makan
                    </Button>
                    <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                        Main
                    </Button>
                    <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                        Tidur
                    </Button>
                    <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                        Belajar
                    </Button>
                </Stack>
            </Flex>
        </Box >
    )
}

export default Game;