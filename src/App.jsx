import Header from './Components/Header';
import MainTopCard from './Components/Body/MainTopCard';
import StatsMiddleCard from './Components/Body/StatsMiddleCard';
import AboutBottomCard from './Components/Body/AboutBottomCard';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Moderate cyan
      main: 'hsl(176, 50%, 47%)'
    }
  }
})

function App() {

  const cardOverlap = {
    position: "relative",
    top: -55,
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className='body-wrap' style={cardOverlap}>
        <MainTopCard />
        <StatsMiddleCard />
        <AboutBottomCard />
      </div>
    </ThemeProvider>
  )
}

export default App
