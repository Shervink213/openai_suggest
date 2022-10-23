import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#ffffff',
            contrastText: '#000000',
        },
        error: {
            main: '#d32f2f',
            contrastText: '#ffffff',
        },
        success: {
            main: '#4caf50',
        },
        grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100: '#d5d5d5',
            A200: '#aaaaaa',
            A400: '#303030',
            A700: '#616161',
            
        }
        
    },
    typography: {
        htmlFontSize: 16,
        fontFamily: ["Poppins", "Century Gothic", "Arial", "sans-serif"],
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontSize: '6rem',
        },
        h2: {
            fontSize: '3.75rem',
        },
        h3: {
            fontSize: '3rem',
        },
        h4: {
            fontSize: '2.125rem',
        },
        h5: {
            fontSize: '1.5rem',
        },
        h6: {
            fontSize: '1.25rem',
        },
        body1: {
            fontSize: '1rem',
        }
    }
})

export default theme;