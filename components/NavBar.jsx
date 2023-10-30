"use client"
import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';

import MareaCreativaIcon from '@components/Icons/mc-icon-min.svg'
import ThemeSwitcher from '@components/ThemeSwitcher';

/**
 *
 *
 * @export
 * @return {*} 
 */
export default function NavBar({ posts }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const list = (
        <Box
            sx={{
                width: 250,
                padding: '16px',
            }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                {posts.map((post) => (
                    <Link href={`/posts/${post.id}`} key={post.id}>
                        <ListItemButton key={post.id}>
                            <ListItemText primary={post.title} />
                        </ListItemButton>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary" enableColorOnDark sx={{}}>
                <Toolbar>
                    <Link href={`/`} color="primary.contrastText" underline="none">
                        <IconButton
                            size="large"
                            aria-label="logo"
                            color="inherit"
                            sx={{ mx: 2, maxHeight: 56, maxWidth: 56 }}
                        >
                            <MareaCreativaIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'inline' } }}
                        >
                            Marea Creativa
                        </Typography>
                    </Link>
                    <div style={{ flex: 1 }}></div> {/* This creates space to push the following components to the right */}
                    <ThemeSwitcher />
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mx: 2 }}
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                {list}
            </Drawer>
        </Box>
    );
}
