import React from "react";
import { Heading, Flex } from '@chakra-ui/react'

export default function Header() {
    return (
        <Flex className="Header" justifyContent='center' >
            <Flex className="Jam" bg='#2f3e46' color='#EAE0D5' w='100vw' px='10' py='6' >
                <Heading as='h4' py='2' size='md' >Rabu, 09:00</Heading>
            </Flex>
        </Flex>
    )
}