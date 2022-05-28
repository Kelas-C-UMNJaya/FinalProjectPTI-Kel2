import React from "react";
import { Stack, Button, Heading } from "@chakra-ui/react";

function TravelButton() {
    return (
        <Stack>
            <Heading as='h4' size='lg' color='#A0BCC2'>Go To:</Heading>
            <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                Kampus
            </Button>
            <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                Cafe
            </Button>
            <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                Healing
            </Button>
        </Stack>
    )
}
export default TravelButton;