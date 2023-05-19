import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    return (
            <Flex
                bg='#D1F1FF'
                fontFamily='Abhaya Libre'
                marginTop='5rem'                
                direction='column'
                justify='center'
                alignItems='center'
                h='500px'
                textAlign='center'
            >
                <style>
                    {`
                    .box {
                        --mask:
                          radial-gradient(377.36px at 50% 520.00px,#000 99%,#0000 101%) calc(50% - 400px) 0/800px 100%,
                          radial-gradient(377.36px at 50% -320px,#0000 99%,#000 101%) 50% 200px/800px 100% repeat-x;
                        -webkit-mask: var(--mask);
                                mask: var(--mask);
                      }
                    `}
                </style>
            
                <Box>
                    <Heading h='120px' as='h2' size='2xl' noOfLines={1}>
                        Join the green revolution without <br /> 
                        commitment
                    </Heading>
                    <Heading as='p' size='l' >
                        If you are missing something and don't want to miss future promotions or our future products
                    </Heading>
                </Box>
                <Box
                    marginTop='30px'
                >
                    <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <input type="email" {...register('email', { pattern: /^\S+@\S+$/i })} />
                        {errors.email && <p>Please enter email valid.</p>}
                        <Button
                            type="submit"
                        >
                            Send
                        </Button>
                    </form>
                </Box>
            </Flex>
    ) 
}