import React from "react";
import { Heading, Image, Flex, Box, Button, CircularProgress, Stack, CircularProgressLabel } from '@chakra-ui/react'
import Header from "../GameComp/Header";
import UserStatus from "../GameComp/UserStatus";
import Home_pagi from "../Asset/BackgroundAsset/Home_pagi.png";
import UserInfo from "../GameComp/UserInfo";

function Game() {
    return (
        <Flex className="Bungkus" h='100vh' bgImage={Home_pagi} bgSize='cover' bgPosition='center' color='#712B75' direction='column'>
            <Header />
            <Flex className="Body2" justifyContent='center' gap={{ base: '0', md: '50', lg: '100' }} direction={{ base: 'row', md: 'column', lg: 'row' }}>
                <UserInfo />
                <UserStatus />
            </Flex>
        </Flex >
    )
}

export default Game;