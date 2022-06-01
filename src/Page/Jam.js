import { Heading, Flex, Text } from "@chakra-ui/react";
import { addMinutes, startOfToday, startOfWeek, format } from "date-fns";
import React, { useState, useEffect } from "react";

export default function Jam() {
    const [jam, setJam] = useState(startOfWeek(startOfToday()));


    const updateJam = () => {
        setJam((prevVal) => addMinutes(prevVal, 1));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateJam();
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <Flex gap='2'>
            <Heading as='h6' size='xs'>{format(jam, 'HH:mm')}</Heading >
            <Text fontSize='xs'>{format(jam, 'E, MMM yyyy')}</Text >
        </Flex>
    )
}