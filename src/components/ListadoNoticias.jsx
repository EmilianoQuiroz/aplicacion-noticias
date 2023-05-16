// Importamos los componentes de Material UI
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import useNoticias from '../hooks/useNoticias'
// Importamos el componente noticia
import Noticia from './Noticia'

const ListadoNoticias = () => {
    // Extraemos las noticias
    const { noticias, totalNoticias} = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20)
    console.log(totalPaginas)

  return (
    <>
        <Typography
            textAlign={'center'}
            margin={5}
            variant='h3'
            component={'h2'}

        >
            Ultimas Noticias
        </Typography>

        {/** Grid contenedor de noticias */}
        <Grid
            container
            spacing={2}
        >
            {/** Iteracion de las noticias */}
            {noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>

        {/** Mostramos el paginador */}
        <Stack 
            sx={{
                marginY: 5
            }}
            spacing={2}
            direction={'row'}
            justifyContent='center'
            alignItems='center'
        >
          <Pagination 
            count={totalPaginas} 
            color="primary" 
        />
        </Stack>

    </>
  )
}

export default ListadoNoticias