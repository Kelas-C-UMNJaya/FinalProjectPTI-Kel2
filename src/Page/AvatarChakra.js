import { React, useContext, useState } from "react";
import { Text, Input, Flex, Box, Button, Select, FormControl, VStack, Container } from '@chakra-ui/react'
import ImageSlider from "../Component/ImageSlider";
import { SlideData } from "../Component/AvatarData";
import { useNavigate } from "react-router-dom";
import { userContext } from "../UserContext";
import Ava_bg from '../Asset/BackgroundAsset/Ava_bg.png'


function AvatarChakra() {
    let navigate = useNavigate();
    const [temp, setTemp] = useState("");
    const [temp2, setTemp2] = useState("");
    const { userData } = useContext(userContext);

    function handleChangeName(e) {
        setTemp(e.target.value);
    }
    function handleChangeJurusan(e) {
        setTemp2(e.target.value);
    }

    function handleSubmit(e) {
        userData.name = temp;
        userData.jurusan = temp2;
        e.preventDefault();
        console.log(e);
        console.log(userData.name);
        navigate("/Game");
    }

    return (
        <Flex className="Bungkus" h='100vh' color='#4D4C7D' bgImage={Ava_bg} bgSize='cover' bgPosition='center' direction='column'>
            <Box className="Header" h='30px' justifyContent='center' bg='#E9D5CA' color=''>
                <Text mx='5px'>7-Days Student</Text>
            </Box>
            <Flex className="Body" mx={{ base: '24px', md: '150px', lg: '370px' }} justifyContent='center' gap='5' align='center' flexGrow='1'>
                <Flex className="SignUp" bg='#262927' border='2px solid black' borderRadius='3px' justifyContent='center' alignItems='center' gap='10' direction={{ base: 'column', lg: 'row' }}>
                    <Box w='50%' p={4} display='flex' justifyContent='center' alignItems='center' >
                        <ImageSlider slides={SlideData} />
                    </Box>
                    <Box className="InputData" as="form" onSubmit={handleSubmit} display='flex' flexDir='column' alignItems='center' justifyContent='center'>
                        <Input onChange={handleChangeName} value={temp} size='sm' my='3' borderRadius='3' bg='#E9D5CA'
                            placeholder="Enter your name..." _placeholder={{ color: '#4D4C7D' }}>
                        </Input>
                        <Select onClick={handleChangeJurusan} placeholder="Program Studi" size='sm' borderRadius='3' color='#4D4C7D' bg='#E9D5CA'>
                            <option value='Informatika'>Informatika</option>
                            <option value='Teknik Sipil'>Teknik Sipil</option>
                            <option value='Teknik Mesin'>Teknik Mesin</option>
                            <option value='Teknik Elektro'>Teknik Elektro</option>
                            <option value='Teknik Industri'>Teknik Industri</option>
                        </Select>
                        <Button as="button" borderRadius='3' type="submit" variant='solid' color='#4D4C7D' my='3' bg='#E9D5CA' size='sm' _hover={{ bg: '#363062' }}>
                            Start
                        </Button>
                    </Box>
                </Flex>
            </Flex >
        </Flex >
    )
}

export default AvatarChakra;