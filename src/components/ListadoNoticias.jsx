// Importamos los componentes de Material UI
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useNoticias from '../hooks/useNoticias'
// Importamos el componente noticia
import Noticia from './Noticia'

const ListadoNoticias = () => {
    // Extraemos las noticias
    const { noticias } = useNoticias()

    console.log(noticias)

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
    </>
  )
}

export default ListadoNoticias