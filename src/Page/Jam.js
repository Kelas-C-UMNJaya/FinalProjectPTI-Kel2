import { Heading, Flex, Text } from "@chakra-ui/react";
import { addMinutes, startOfToday, startOfWeek, format } from "date-fns";
import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../UserContext";

export default function Jam() {
    const { salam, setSalam } = useContext(userContext);
    const [jam, setJam] = useState(startOfToday());

    const updateJam = () => {
        setJam((prevVal) => addMinutes(prevVal, 1));
    }

    function greetings() {
        if (format(jam, "HH") >= "00" && format(jam, "HH") < "06") {
            setSalam("Malam");
        } else if (format(jam, "HH") >= "06" && format(jam, "HH") < "11") {
            setSalam("Pagi");
        } else if (format(jam, "HH") >= "11" && format(jam, "HH") < "14") {
            setSalam("Siang");
        } else if (format(jam, "HH") >= "14" && format(jam, "HH") < "18") {
            setSalam("Sore");
        } else if (format(jam, "HH") >= "18" && format(jam, "HH") < "00") {
            setSalam("Malam");
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            greetings();
            updateJam();
        }, 1000);
        return () => clearInterval(interval);
    });

    return (
        <Flex gap='2'>
            <Heading as='h6' size='xs'>{format(jam, 'HH:mm')}</Heading >
            <Text fontSize='xs'>{format(jam, 'E, d MMM yyyy')}</Text >
        </Flex>
    )
}