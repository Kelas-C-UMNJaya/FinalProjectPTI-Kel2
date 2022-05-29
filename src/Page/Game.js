import React from "react";
import { Heading, Image, Flex, Box, Button, CircularProgress, Stack, CircularProgressLabel } from '@chakra-ui/react'
import Header from "../GameComp/Header";
import UserStatus from "../GameComp/UserStatus";
import AvatarBox from "../GameComp/AvatarBox";
import ButtonGroup from "../GameComp/ButtonGroup";
import Home_pagi from "../Asset/BackgroundAsset/Home_pagi.png";

function Game() {
    return (
        <Flex className="Bungkus" h='100vh' bgImage={Home_pagi} bgSize='cover' bgPosition='center' color='#712B75' direction='column'>
            <Header />
            <UserStatus />
            <Flex className="Body2" justifyContent='center' gap='100' direction='row'>
                <AvatarBox />
                <ButtonGroup />
            </Flex>
        </Flex >
    )
}

export default Game;