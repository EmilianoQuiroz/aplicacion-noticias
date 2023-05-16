import React from 'react'
// Importamos los componentes de Material UI
import { FormControl, InputLabel, Select, MenuItem, Button, Box} from '@mui/material'
// Importamos el hook
import useNoticias from '../hooks/useNoticias'

// Categorias de noticias (Son todas las que soporta la API)
const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

const Formulario = () => {

    // Extraemos la categoria y el handle
    const { categoria, handleChangeCategoria } = useNoticias()
  return (
    <form>
        {/**
        * Con fullWidth le decimos al elemento que tome todo el ancho
        */}
        <FormControl fullWidth>
            <InputLabel> Categoría </InputLabel>
            <Select
                label="Categoría"
                onChange={handleChangeCategoria}
                value={categoria}
            >
                {CATEGORIAS.map(categoria => (
                    <MenuItem 
                        key={categoria.value} 
                        value={categoria.value}
                        >
                            {categoria.label}
                    </MenuItem>
                ))}
            </Select>

            {/** 
            * Box se utiliza como una especie de contenedor.
            * Con SX podemos asignarle estilos personalizados a nuestro Box
            */}
            <Box sx={{marginTop:2}}>
                {/**Con el componente Button podemos crear Botones y asignarle estilos */}
                <Button
                    fullWidth
                    variant='contained'
                    color= "primary"
                >
                    Buscar Noticias
                </Button>
            </Box>
        </FormControl>
    </form>
  )
}

export default Formulario