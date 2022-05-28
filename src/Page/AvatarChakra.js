import { React, useState, useContext } from "react";
import { Text, Heading, Input, Flex, Center, Container, Box, Button, Select, FormControl } from '@chakra-ui/react'
import ImageSlider from "../Component/ImageSlider";
import { SlideData } from "../Component/AvatarData";
import { Link } from "react-router-dom";

// import "../cssnya/Avatar.css";

function AvatarChakra() {
    const [name, setName] = useState("");


    function handleChange(event) {
        setName(event.target.value);
        console.log(event.target.value);
    }

    return (
        <Box className="Bungkus" h='100vh' bg='#354259' color='#E9D5CA'>
            <Box className="Header" h='20' justifyContent='center' alignItems='center'>
                <Center>
                    <Heading my='5'>7-Days Student</Heading>
                </Center>
            </Box>
            <Flex className="Body" justifyContent='center' gap='5' h='450' align='center'>
                <Box className="SignUp" w='550px' h='300px' bg='teal.400' border='2px solid black' borderRadius='3px' justifyContent='center' alignContent='center' gap='5' display='flex'>
                    <Box w="50%" p={4} justify='center' h='auto' my='10'>
                        <ImageSlider slides={SlideData} />
                    </Box>
                    <Box className="menuData" justifyContent='center' alignContent='center'>
                        <Box as="form" my='65px'>
                            <Input variant='filled' onChange={handleChange} size='sm' borderRadius='3' bg='teal.400' color='#712B75'
                                placeholder="Enter your name...">
                            </Input>
                            <Select placeholder="Program Studi" size='sm' borderRadius='3' color='#712B75' mt='5'>
                                <option value='Pilihan1'>Informatika</option>
                                <option value='Pilihan2'>Teknik Sipil</option>
                                <option value='Pilihan3'>Teknik Mesin</option>
                                <option value='Pilihan4'>Teknik Elektro</option>
                                <option value='Pilihan5'>Teknik Industri</option>
                            </Select>
                            <Link to='/Game'>
                                <Button my='5' bg='#A0BCC2' color='#712B75' size='sm' variant='solid'>
                                    Start
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Flex >
        </Box >
    )
}

export default AvatarChakra;