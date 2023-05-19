import { Button, Flex } from "@chakra-ui/react"

export const ButtonStore = () => {
    return (
        <Flex
            direction='row'
            justify='center' 
            minH='100px'
            alignItems='center'
            m='auto'
        >
            <Button
                marginTop='5rem'
                w='20rem'
                h='4rem'
                bgColor='#EFA693'
                borderRadius='30px'
                textDecor='none'
            >
                <a href="https://www.gradiweb.com/es/">Browse all products</a>
            </Button>
        </Flex>
    )
}