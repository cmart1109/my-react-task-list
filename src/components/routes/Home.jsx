import { Box, Button, Image, Link } from '@chakra-ui/react';

export default function Home() {
  fetch("http://localhost:8000", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error(error);
    })
  return (
    <div>
      <Box 
        boxSize='md'
        mx='auto'
        textAlign='center' 
      >
        <Image 
          src='https://www.sesametime.com/assets/wp-content/uploads/2021/03/como-planifiar-listas-tareas-laborales.jpg' 
          alt='tareas' 
        />
        <p>Tus Tareas están más cerca que nunca con esta nueva aplicación. Aprovecha todas las funciones que tenemos para ti</p>
        <Button 
          rounded='md'
          p="4"
          bg="teal.500"
          color="white"
          
        >
          <Link href='/list'>VER TAREAS</Link>
          
        </Button>
      </Box>
    </div>
  );
}
``
