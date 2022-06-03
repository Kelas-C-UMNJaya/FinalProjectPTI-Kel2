import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { userContext } from "../UserContext";

export default function WeatherAPI() {
    const { cuaca } = useContext(userContext);
    return (
        <Box className="WeatherAPI">
            <Flex className="NewsItem" direction='column'>
                <Box className="Card" bg='#2f3e46' borderRadius='3px'>
                    {cuaca.main ? <Heading as='h4' size='lg'>{cuaca.main.temp}°C</Heading> : null}
                    {cuaca.weather[0] ? <Text>{cuaca.weather[0].main}</Text> : null}
                </Box>
            </Flex>
        </Box>
    )
}