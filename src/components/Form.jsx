import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import "../assets/Wave.css"; // Importa el archivo CSS para los estilos personalizados

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Flex
      bg="#D1F1FF"
      fontFamily='Abhaya Libre'
      marginTop="5rem"
      direction="column"
      justify="center"
      alignItems="center"
      h="500px"
      textAlign="center"
      position="relative"
    >
      <Box>
        <Heading h="120px" as="h2" size="2xl" noOfLines={1} fontFamily='Abhaya Libre'>
          Join the green revolution without <br />
          commitment
        </Heading>
        <Heading as="p" size=".0" fontFamily='Abhaya Libre' letterSpacing='1px'>
          If you are missing something and don't want to miss <br /> future promotions or our future products
        </Heading>
      </Box>
      <Box marginTop="30px" className="wave-shape" />
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Flex direction={{ base: 'column', md: 'row' }} alignItems={{ base: 'stretch', md: 'flex-start' }}>
          <input type="email" {...register('email', { pattern: /^\S+@\S+$/i })} />
          {errors.email && <p>Please enter a valid email.</p>}
          <Button
            w={{ base: '100%', md: '120px' }}
            borderRadius='20px'
            marginLeft={{ base: '0', md: '10px' }}
            bgColor='#EFA693'
            marginTop={{ base: '10px', md: '0' }}
            type="submit"
          >
            Send
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};