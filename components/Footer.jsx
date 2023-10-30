import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

/**
 *
 *
 * @export
 * @return {*} 
 */
export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                position: 'relative',
                bottom: 0,
                width: '100%',
                backgroundColor: 'primary.dark',
                color: 'white',
                py: 2,
            }}
        >
            <Container>
                <Typography variant="body2" align="center">
                    &copy; {new Date().getFullYear()} <Link href="https://github.com/CardoPixel" target="_blank"
                        rel="noopener noreferrer" color="#FFFFFF">Cardo Pixelado</Link>
                </Typography>
            </Container>
        </Box>
    );
}
