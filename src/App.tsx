import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/system'
import RegisterCard from './components/RegisterCard'
import './styles/app.scss'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#001e3c',
    },
    secondary: {
      main: '#0a1929',
    },
    text: {
      primary: '#e7ebf0',
      secondary: 'b2bac2',
    },

    contrastThreshold: 4.5,
  },
  typography: {
    h1: {
      fontSize: 36,
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className="appContainer"
        sx={{ backgroundColor: 'primary.main' }}
      >
        <RegisterCard />
      </Box>
    </ThemeProvider>
  )
}

export default App
