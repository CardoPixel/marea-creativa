import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
                    &copy; {new Date().getFullYear()} Cardo Pixelado. Some rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}
