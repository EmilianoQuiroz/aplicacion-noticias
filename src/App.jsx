// Importamos componentes de MUI
import {Container, Grid, Typography} from '@mui/material';

function App() {

  return (
    <Container>
      <header>
        {/**
        * Con el componente Typography manejamos las tipografias en MUI
        * Con Variant podemos decir que apariencia va a tener, mientras
        * que Component va a ser el componente que se va a mostrar
        * SX es un prop que podemos usar para definir estilos personalizados
        */}
        <Typography 
        align='center' 
        marginY={5}
        component="h1"
        variant="h3"
        >
          Buscador de Noticias
        </Typography>
      </header>
    </Container>
  )
}

export default App
