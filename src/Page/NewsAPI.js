import React, { useContext } from "react"
import { useDisclosure, Text, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, Flex, Box, Heading } from '@chakra-ui/react'
import { userContext } from "../UserContext";

export function NewsAPI() {
    const { news } = useContext(userContext);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} onClick={onOpen} size='sm' w='65px' bg='#EAE0D5' _hover={{ bg: '#7678ed' }} color='#2f3e46' variant='solid'>
                News
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Berita hari ini</DrawerHeader>
                        <DrawerBody>
                            {news.map((item, index) => {
                                return (
                                    <Flex className="NewsItem" key={index} direction='column' padding='2'>
                                        <Box className="Card" bg='#2f3e46' padding='2' borderRadius='3px' textAlign='center'>
                                            <Heading className="Judul" paddingBottom='2' fontSize='sm' color='#EAE0D5'>{item.title}</Heading>
                                            <Text textAlign='left' fontSize='xs' color='#EAE0D5'>{item.description}</Text>
                                        </Box>
                                    </Flex>
                                )
                            })}
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}