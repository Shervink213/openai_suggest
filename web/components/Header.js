import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Image from 'next/image';

const Header = () => {
    return (
        <>
            <header>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color='secondary'>
                        <Toolbar>
                            <Image 
                                src={'/ai_logo.svg'}
                                layout='intrinsic'
                                alt='OpenAI logo'
                                width={50}
                                height={50}
                            /> {''}
                            <Typography variant='h5'> 
                                Ask AI for Suggestions
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
            </header>
        </>
    )
}

export default Header;