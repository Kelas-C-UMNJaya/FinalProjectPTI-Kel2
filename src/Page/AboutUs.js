import React from "react";
import {
    UnorderedList,
    ListItem,
    Box,
    Text,
    Heading,
    Button,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Flex,
} from '@chakra-ui/react'
import Jefer from '../Asset/AboutUsAsset/Jefer.jpg'
import Areta from '../Asset/AboutUsAsset/Areta.jpg'
import Steve from '../Asset/AboutUsAsset/Steve.jpg'
import Natan from '../Asset/AboutUsAsset/Natan.jpg'

export default function AboutUs() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen} as="button" borderRadius='5' type="submit" variant='solid' color='#0A0908' my='2' bg='#EAE0D5' size='sm' _hover={{ color: '#EAE0D5', bg: '#22333B' }}>
                About Us
            </Button>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader><Heading>Our Team</Heading></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex flexDir='column' gap='2'>
                            <Flex flexDir='row' className="Card" bg='#2f3e46' padding='2' borderRadius='5px' color='#EAE0D5' gap='2'>
                                <Box boxSize='70px' objectFit='cover'>
                                    <Image src={Jefer} />
                                </Box>
                                <Flex justifyContent='center' flexDir='column'>
                                    <Heading as='h6' size='lg'>Jefer Setiawan</Heading>
                                    <Text>00000059297</Text>
                                </Flex>
                            </Flex>
                            <Flex flexDir='row' className="Card" bg='#2f3e46' padding='2' borderRadius='5px' color='#EAE0D5' gap='2'>
                                <Box boxSize='70px' objectFit='cover'>
                                    <Image src={Natan} />
                                </Box>
                                <Flex justifyContent='center' flexDir='column'>
                                    <Heading as='h6' size='lg'>Nataniel Tambayung</Heading>
                                    <Text>00000057617</Text>
                                </Flex>
                            </Flex>
                            <Flex flexDir='row' className="Card" bg='#2f3e46' padding='2' borderRadius='5px' color='#EAE0D5' gap='2'>
                                <Box boxSize='70px' objectFit='cover'>
                                    <Image src={Steve} />
                                </Box>
                                <Flex justifyContent='center' flexDir='column'>
                                    <Heading as='h6' size='lg'>Steve Christian. Y. P </Heading>
                                    <Text>00000058797</Text>
                                </Flex>
                            </Flex>
                            <Flex flexDir='row' className="Card" bg='#2f3e46' padding='2' borderRadius='5px' color='#EAE0D5' gap='2'>
                                <Box boxSize='70px' objectFit='cover'>
                                    <Image src={Areta} />
                                </Box>
                                <Flex justifyContent='center' flexDir='column'>
                                    <Heading as='h6' size='lg'>Areta Escalonia C.</Heading>
                                    <Text>00000057872</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}