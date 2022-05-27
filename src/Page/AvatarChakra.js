import React from "react";
import { Text, Heading, Input, Flex, Center, Container, Box, Button, Select, FormControl } from '@chakra-ui/react'
import ImageSlider from "../Component/ImageSlider";
import { SlideData } from "../Component/AvatarData";

// import "../cssnya/Avatar.css";

function AvatarChakra() {
    return (
        <Box className="Bungkus" h='100vh' bg='gray.800' color='wheat'>
            <div className="Header">
                <Center
                >
                    <Heading>7-Days Student</Heading>
                </Center>
            </div>
            <Flex className="Body" justifyContent='center' gap='5' h='full' align='center'>
                <Box
                    className="SignUp"
                    w='550px'
                    h='300px'
                    bg='teal.400'
                    border='2px solid black'
                    borderRadius='10px'
                    justifyContent='center'
                    alignContent='center'
                    gap='5'
                    display='flex'
                >
                    <Box
                        w="50%"
                        p={4}
                        justify='center'
                        h='auto'
                        my='10'
                    >
                        <ImageSlider slides={SlideData} />
                    </Box>
                    <Box className="menuData"
                        justifyContent='center'
                        alignContent='center'
                    >
                        <Box
                            as="form"
                            my='20'
                        >
                            <Input
                                variant='filled'
                                placeholder="Enter your name..."
                                size='sm'
                                borderRadius='10'
                                bg='teal.400'
                                color='gray.800'
                            ></Input>
                            <Select
                                placeholder="Program Studi"
                                size='sm'
                                borderRadius='10'
                                color='gray.800'
                                mt='5'
                            >
                                <option value='Pilihan1'>Informatika</option>
                                <option value='Pilihan2'>Teknik Sipil</option>
                                <option value='Pilihan3'>Teknik Mesin</option>
                                <option value='Pilihan4'>Teknik Elektro</option>
                                <option value='Pilihan5'>Teknik Industri</option>
                            </Select>
                            <Button
                                mt='5'
                                border='2px solid black'
                                bg='wheat'
                                color='gray.800'
                                size='sm'
                                borderRadius='10'
                            >Start</Button>
                        </Box>
                    </Box>
                </Box>
            </Flex >
        </Box >
    )
}

export default AvatarChakra;