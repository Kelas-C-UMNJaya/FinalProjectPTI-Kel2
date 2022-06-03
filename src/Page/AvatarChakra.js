import { React, useContext, useState, useRef } from "react";
import { Input, Flex, Box, Button, Select, Heading, Spacer } from '@chakra-ui/react'
import ImageSlider from "../Component/ImageSlider";
import { AvatarData } from "../Component/AvatarData";
import { useNavigate } from "react-router-dom";
import { userContext } from "../UserContext";
import Ava_bg from '../Asset/BackgroundAsset/Ava_bg.png'
import AboutUs from '../Page/AboutUs'
import Rules from '../Page/Rules'

function AvatarChakra() {
    let navigate = useNavigate();
    const nameTemp = useRef();
    const jurusanTemp = useRef();
    const { userData } = useContext(userContext);

    function handleSubmit(e) {
        e.preventDefault();
        userData.name = nameTemp.current.value;
        userData.jurusan = jurusanTemp.current.value;
        navigate("/Game");
    }

    return (
        <Flex className="Bungkus" h='100vh' color='#4D4C7D' bgImage={Ava_bg} bgSize='cover' bgPosition='center' direction='column'>
            <Flex className="Header" bg='#2f3e46' color='#EAE0D5' flexDir='row' py='2' paddingLeft='4' paddingRight='4'>
                <Rules />
                <Spacer />
                <Flex justifyContent='center' alignItems='center'>
                    <Heading as='h6' size='md' >7-Days Student</Heading>
                </Flex>
                <Spacer />
                <AboutUs />
            </Flex>
            <Flex className="Body" mx={{ base: '40px', sm: '100px', md: '200px', lg: '250px' }}
                justifyContent='center' gap='5' align='center' flexGrow='1'>
                <Flex className="SignUp" bg='#2f3e46' border='2px #5E503F' borderRadius='3px'
                    justifyContent='center' alignItems='center' gap={{ base: '0', md: '0', lg: '10' }}
                    direction={{ base: 'column', lg: 'row' }}>
                    <Box w={{ base: '70%', md: '50%', lg: '50%' }} p={4} display='flex' justifyContent='center' alignItems='center' >
                        <ImageSlider slides={AvatarData} />
                    </Box>
                    <Box className="InputData" as="form" onSubmit={handleSubmit} display='flex'
                        flexDir='column' alignItems='center' justifyContent='center'>
                        <Input ref={nameTemp} size='sm' my='3' borderColor='#5E503F' borderRadius='3' bg='#EAE0D5' color='#0A0908'
                            placeholder="Enter your name..." _hover={{ color: '#0A0908' }}>
                        </Input>
                        <Select ref={jurusanTemp} placeholder="Program Studi" size='sm' borderColor='#5E503F' _hover={{ color: '#0A0908' }} borderRadius='3' color='#0A0908' bg='#EAE0D5'>
                            <option value='Informatika'>Informatika</option>
                            <option value='Teknik Sipil'>Teknik Sipil</option>
                            <option value='Teknik Mesin'>Teknik Mesin</option>
                            <option value='Teknik Elektro'>Teknik Elektro</option>
                            <option value='Teknik Industri'>Teknik Industri</option>
                        </Select>
                        <Button as="button" borderRadius='3' type="submit" variant='solid' color='#0A0908' my='3' bg='#EAE0D5' size='sm' _hover={{ color: '#EAE0D5', bg: '#22333B' }}>
                            Start
                        </Button>
                    </Box>
                </Flex>
            </Flex >
        </Flex >
    )
}

export default AvatarChakra;