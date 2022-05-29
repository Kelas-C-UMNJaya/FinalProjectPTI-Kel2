import React, { useContext } from "react";
import { Text, Flex, Box, Image } from "@chakra-ui/react";
import { userContext } from "../UserContext";

export default function UserInfo() {
    const { userData } = useContext(userContext);
    return (
        <Flex className="Body" justifyContent='center' align='center' gap='20px' padding={{ base: '4' }} direction='column'>
            <Box className="UserBar" color='#EAE0D5' borderRadius='3' bg='#2f3e46' textAlign='left' direction='column' w='full' px='4' py='2' flexGrow='1'>
                <Text fontSize='mg'>Selamat Pagi, {userData.name}</Text>
                <Text as='i' fontSize='mg'>{userData.jurusan}</Text>
            </Box>
            <Box justifyContent='center' color='#712B75' align='center' >
                <Image
                    boxSize={{ base: '180px', md: '200px', lg: '240px' }}
                    objectFit='cover'
                    src='https://cdn.discordapp.com/attachments/946960873686188093/978883459672047676/c1.png'
                />
            </Box>
        </Flex>
    )
}