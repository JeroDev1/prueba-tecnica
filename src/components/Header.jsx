import { Heading, Flex } from "@chakra-ui/react"

export const Header = () =>{

    return (
        <Heading
            w='100vw'
            h='32px'
            bg='#FFDCD3'
            color='black'
        >
            <Flex
                direction='column'
                justify='center'
                alignItems='center'
                fontFamily='Abhaya Libre'
                fontSize='20px'
            >
                <p>Gratis verzending vanaf €30</p>
            </Flex>
        </Heading>
    )
}