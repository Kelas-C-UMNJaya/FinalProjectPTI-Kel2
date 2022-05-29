import React from "react";
import { Heading, Flex, Box, Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react'
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from "@chakra-ui/icons";

export default function Header() {
    return (
        <Flex className="Header" justifyContent='center' >
            <Flex className="Jam" bg='#2f3e46' color='#EAE0D5' w='100vw' px='2' py='6' >
                <Heading as='h4' py='2' size='md' >Rabu, 09:00</Heading>
            </Flex>
        </Flex>
    )
}