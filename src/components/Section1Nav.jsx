import { Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FcNext, FcPrevious } from "react-icons/fc";

export const Section1Nav = () => {
  const direction = useBreakpointValue({ base: "column", md: "row" });
  const fontSize = useBreakpointValue({ base: 'x-large', md: "xxx-large" });

  return (
    <Flex
        direction={direction}
        justify="space-between"
        w="100vw"
        h="180px"
        bg="white"
    >
        <Flex
            justify={direction === "column" ? "flex-start" : "center"} // Ajusta la justificación según el formato
            alignItems={direction === "column" ? "flex-start" : "center"} // Ajusta la alineación vertical según el formato
            fontFamily="Abhaya Libre"
            fontSize={fontSize}
            bg="white"
            flexBasis="50%"
            ml={direction === "column" ? "30px" : "0"} // Agrega un margen izquierdo de 30px en formato columna (móvil)
            mt={direction === "column" ? "20px" : "0"} // Agrega un margen top de 20px en formato columna (móvil)
        >
            <h1>
                Discover our <br />
                planet-friendly offer
            </h1>
        </Flex>
        <Flex
            direction={direction === "column" ? "row" : "row"}
            justify={direction === "column" ? "flex-start" : "center"}
            alignItems={direction === "column" ? "center" : "flex-end"}
            fontFamily="Abhaya Libre"
            fontSize={fontSize}
            bg="white"
            flexBasis="50%"
            ml={direction === "column" ? "30px" : "0"} // Agrega un margen izquierdo de 10px en formato columna (móvil)
        >
            <IconButton
                bg="#FFDCD3"
                p="0px 25px"
                h='30px'
                color="white"
                borderRadius="30px"
                transition="all .5s ease-in-out"
                _hover={{ transform: "scale(1.07)" }}
            >
                <div
                style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "-10px", // Agregamos un margen negativo para que el icono se desborde ligeramente
                    border: "2px solid rgba(0, 0, 0, 0.25)", // Aplicamos el borde sombreado
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" // Aplicamos una sombra al borde
                    }}
                >
                <FcPrevious size={24}/>
                </div>
            </IconButton>
                <div style={{ width: "5px" }} /> {/* Agregamos un div con ancho de 5px como espacio entre los botones */}
            <IconButton
                bg="#FFDCD3"
                p="0px 25px"
                h='30px'
                color="white"
                borderRadius="30px"
                transition="all .5s ease-in-out"
                _hover={{ transform: "scale(1.07)" }}
                >
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "-10px", // Agregamos un margen negativo para que el icono se desborde ligeramente
                        border: "2px solid rgba(0, 0, 0, 0.25)", // Aplicamos el borde sombreado
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" // Aplicamos una sombra al borde
                    }}
                >
                    <FcNext size={24} />
                </div>
            </IconButton>
        </Flex>
    </Flex>
  );
};