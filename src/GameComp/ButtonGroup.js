import React from "react";
import { Stack, Heading, Button, Flex } from "@chakra-ui/react";

export default function ButtonGroup() {
    return (
        <Flex>
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
            <Stack>
                <Heading as='h5' size='md' color='#A0BCC2'>@ Home:</Heading>
                <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                    Makan
                </Button>
                <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                    Main
                </Button>
                <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                    Tidur
                </Button>
                <Button bg='#A0BCC2' size='sm' color='#712B75' variant='solid'>
                    Belajar
                </Button>
            </Stack>
        </Flex>
    )
}