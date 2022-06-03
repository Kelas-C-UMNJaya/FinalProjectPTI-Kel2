import { Heading, Flex, Text, Spacer, Box } from "@chakra-ui/react";
import { addMinutes, startOfToday, startOfWeek, format, setDay, getHours, add, addWeeks, getDay, getMinutes } from "date-fns";
import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../UserContext";
import { NewsAPI } from "../Page/NewsAPI";

export default function Jam() {
    const { setSalam, gameOver, setGameOver } = useContext(userContext);
    const [jam, setJam] = useState(startOfWeek(startOfToday()));
    const [endTime, setEndTime] = useState(addWeeks(startOfToday(), 1));

    const updateJam = () => {
        if (gameOver) {
            setJam((prevVal) => addMinutes(prevVal, 0));
        } else {
            setJam((prevVal) => addMinutes(prevVal, 1));
        }
    }

    function greetings(time) {
        const val = time.getHours();
        if (val >= 0 && val < 6) {
            setSalam("Malam");
        } else if (val >= 6 && val < 11) {
            setSalam("Pagi");
        } else if (val >= 11 && val < 15) {
            setSalam("Siang");
        } else if (val >= 15 && val < 18) {
            setSalam("Sore");
        } else if (val >= 18 && val < 24) {
            setSalam("Malam");
        }
    }

    function gameOverHandler(over) {
        const hari = over.getDay();
        if (hari > getDay(endTime)) {
            setGameOver(true);
            // console.log("Game Over");
        } else {
            setGameOver(false);
            // console.log("Game On");
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            gameOverHandler(jam);
            greetings(jam);
            updateJam();
        }, 100);
        return () => clearInterval(interval);
    });

    return (
        <Flex direction="row" w='100vw'>
            <Box className="Jam" padding="3">
                <Heading as='h6' size='xs'>{format(jam, 'HH:mm')}</Heading >
                <Text fontSize='xs'>{format(jam, 'EEEE, MMM yyyy')}</Text >
            </Box>
            <Spacer />
            <Box className="NewsAPI" display='flex' justifyContent='center' alignItems='center'>
                <NewsAPI />
            </Box>
        </Flex>
    )
}