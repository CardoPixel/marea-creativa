import React from 'react';
import { Grid, Typography } from '@mui/material';

/**
 * Home component for the main page.
 *
 * @component
 * @return {JSX.Element} The JSX component for the Home page.
 */
export default function Home() {
  return (
    <Grid container spacing={1}>
      <Grid item xs>
        <Typography variant="body1" sx={{
          m: 2,
          wordWrap: "break-all",
          textAlign: "justify",
          textJustify: "inter-word",
        }}>
          Marea Creativa es un gremio en el corazón de Sufokia que acoge a almas apasionadas y creativas de todos los rincones de Wakfu. Nuestro objetivo es simple: nutrir la inspiración y la destreza artesanal de nuestros miembros, sin importar su clase o experiencia. En Marea Creativa, encontrarás un refugio donde tus habilidades únicas se celebran y donde puedes colaborar en proyectos emocionantes. Si eres un artesano en busca de un gremio donde tus creaciones tomen vida, un estratega en busca de un lugar donde tus ideas florezcan, o simplemente alguien que busca un grupo comprometido con la diversidad y la camaradería, ¡te invitamos a unirte a nuestra Marea Creativa! Juntos, construiremos un legado de creatividad y excelencia en el mundo de Wakfu. Únete a nosotros y sumérgete en un océano de posibilidades creativas. En fin, seremos un gremio principalmente concentrado en subir oficios, cumplir logros y retos.
        </Typography>
      </Grid>
    </Grid>
  );
}
