import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function AvatarBox() {
    return (
        <Box boxSize='sm' justifyContent='center' color='#712B75' align='center' >
            <Image
                boxSize='240px'
                objectFit='cover'
                src='https://cdn.discordapp.com/attachments/946960873686188093/978883459672047676/c1.png'
            />
        </Box>
    )
}