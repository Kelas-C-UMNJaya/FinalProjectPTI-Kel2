import { Flex, Text, Box, Heading, Image, Button } from "@chakra-ui/react";
import React, { useContext, useState, useEffect } from "react";
import { userContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

import c1 from '../Asset/AvatarAsset/c1.png'
import c2 from '../Asset/AvatarAsset/c2.png'
import c3 from '../Asset/AvatarAsset/c3.png'
import c4 from '../Asset/AvatarAsset/c4.png'
import c5 from '../Asset/AvatarAsset/c5.png'

function GameOver() {
    let navigate = useNavigate();
    const { userData, curr, countMakan, countBelajar, countMain, countTidur } = useContext(userContext);
    const [pesanJarang, setPesanJarang] = useState("");
    const [pesanSering, setPesanSering] = useState("");
    const [avatarProfil, setAvatarProfil] = useState(c1);


    function handlePesanJarang() {
        if (countMakan < 19) {
            setPesanJarang("Makan");
        } else if (countMain < 23) {
            setPesanJarang("Main");
        } else if (countBelajar < 28) {
            setPesanJarang("Belajar");
        } else if (countTidur < 14) {
            setPesanJarang("Tidur");
        }
    }

    function handlePesanSering() {
        if (countMakan > 25) {
            setPesanSering("Makan");
        } else if (countMain > 30) {
            setPesanSering("Main");
        } else if (countBelajar > 30) {
            setPesanSering("Belajar");
        } else if (countTidur > 15) {
            setPesanSering("Tidur");
        }
    }

    function handleBackButton() {
        navigate("/");
        window.location.reload();
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handlePesanJarang();
            handlePesanSering();
        }, 100);
        return () => clearInterval(interval);
    });

    useEffect(() => {
        if (curr === 0) {
            setAvatarProfil(c1);
        } else if (curr === 1) {
            setAvatarProfil(c2);
        } else if (curr === 2) {
            setAvatarProfil(c3);
        } else if (curr === 3) {
            setAvatarProfil(c4);
        } else if (curr === 4) {
            setAvatarProfil(c5);
        }
    }, []);

    return (
        <Flex className="Bungkus" h='100vh' direction='column' justifyContent='center' bg='#C6AC8F' p={{ base: '20px', md: '180px', lg: '200px' }}>
            <Flex className="Card" bg='#22333B' color='wheat' flexDir='column' alignItems='center' justifyContent='center' gap='20px' borderRadius='5'>
                <Flex alignItems='center' flexDir='column' textAlign='center'>
                    <Heading as='h1' size='lg' my='3' >Horeee!!!</Heading>
                    <Text fontSize='md'>Game Ini Sudah Tamat</Text>
                    <Text fontSize='md'>Berikut adalah Evaluasi Anda Selama 1 Minggu </Text>
                </Flex>
                <Flex className="Avatar">
                    <Box justifyContent='center' color='' alignItems='center' textAlign='center'>
                        <Image
                            p='4'
                            src={avatarProfil}
                            objectFit='cover'
                            boxSize={{ base: '180px', md: '200px', lg: '240px' }}
                        />
                        <Text>{userData.name}</Text>
                        <Text>{userData.jurusan}</Text>
                    </Box>
                </Flex>
                <Flex className="Pesan-Pesan" textAlign='center' paddingBottom='4' flexDir='column'>
                    <Text>Seminggu ini kamu:</Text>
                    <Flex flexDir='column'>
                        {pesanJarang ? "Kamu Kurang " + pesanJarang : ""}
                        {pesanSering ? "Kamu Sering " + pesanSering : ""}
                    </Flex >
                </Flex>
                <Button onClick={handleBackButton} as="button" borderRadius='3' type="submit" variant='solid' color='#0A0908' my='5' bg='#EAE0D5' size='sm' _hover={{ color: '#EAE0D5', bg: '#22333B' }}>
                    Kembali ke awal
                </Button>
            </Flex>
        </Flex >
    )
}
export default GameOver;