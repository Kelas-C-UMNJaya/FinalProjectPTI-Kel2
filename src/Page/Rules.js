import React from "react";
import {
    UnorderedList,
    ListItem,
    Heading,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Flex,
} from '@chakra-ui/react'
import { Kbd } from '@chakra-ui/react'

export default function Rules() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen} as="button" borderRadius='5' type="submit" variant='solid' color='#0A0908' my='2' bg='#EAE0D5' size='sm' _hover={{ color: '#EAE0D5', bg: '#22333B' }}>
                Rules
            </Button>
            <Modal colorScheme='blackAlpha' onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader><Heading>Rules</Heading></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex flexDir='column' gap='2'>
                            <Flex className="Rules" flexDir='column' gap='3'>
                                <span>
                                    Pertama-tama pilihlah karakter dan isi nama serta pilihlah jurusan sesuai keinginan anda.
                                    Permainan akan dimulai pada hari minggu jam 00:00,
                                    permainan akan berlangsung selama 7 hari dan di akhir akan diberitahukan evaluasi selama seminggu.
                                    Untuk menambah status bar anda bisa menekan tombol <Kbd>Makan</Kbd>, <Kbd>Main</Kbd>, <Kbd>Tidur</Kbd>, <Kbd>Belajar</Kbd>.
                                    Ketika tombol <Kbd>Kampus</Kbd>, <Kbd>Hiling</Kbd>, <Kbd>Cafe</Kbd>, <Kbd>Home</Kbd> ditekan maka game akan pindah ke tempat tersebut dan akan muncul tombol sesuai dengan apa yang bisa dilakukan ditempat tersebut.
                                    Untuk menampilkan berita tekan <Kbd>News</Kbd> yang terletak di kanan atas. Cuaca akan di update setiap 5 menit.
                                </span>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}