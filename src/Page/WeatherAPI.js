import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import React, { useContext, useState, useEffect } from "react";
import { userContext } from "../UserContext";

export default function WeatherAPI() {
    const { cuaca } = useContext(userContext);

    return (
        <Box className="WeatherAPI">
            <Flex className="NewsItem" direction='column'>
                <Flex className="Card" bg='#2f3e46' borderRadius='3px' gap='2'>
                    <Flex flexDir='column' justifyContent='center'>
                        {cuaca.main ? <Heading as='h4' size='lg'>{cuaca.main.temp}°C</Heading> : null}
                        {cuaca.weather[0] ? <Text>{cuaca.weather[0].main}</Text> : null}
                    </Flex>
                    <Box>
                        {cuaca.weather ? (
                            <Image
                                src={`http://openweathermap.org/img/wn/${cuaca.weather[0].icon}.png`}
                                objectFit="cover"
                                boxSize={{ md: "100px", base: "50px" }}
                            // py="20px"
                            ></Image>
                        ) : null}
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}