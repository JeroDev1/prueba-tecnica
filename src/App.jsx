//import './App.css'
import { Box, Flex } from '@chakra-ui/react'
import { Header } from './components/Header'
import { Section1Nav } from './components/Section1Nav'
import { Carrousel } from './components/Carrousel'
import { ButtonStore } from './components/ButtonStore'
import { Form } from './components/Form'

function App() {

  return (
  <Flex> 
    <Box h="100vh" overflow="hidden">
        <style>
          {`
          html, body {
            height: 100%;
            width: 100%
            margin: 0;
            padding: 0;
            margin: none;
            background: white;
          }
          `}
        </style>
      </Box>
      <Box>
        <Header />
        <Section1Nav />
        <Carrousel />
        <ButtonStore />
        <Form />
      </Box>
    </Flex> 
  )
}

export default App
