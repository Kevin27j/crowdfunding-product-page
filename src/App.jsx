import Header from './Components/Header';
import MainTopCard from './Components/Body/MainTopCard';
import StatsMiddleCard from './Components/Body/StatsMiddleCard';
import AboutBottomCard from './Components/Body/AboutBottomCard';

function App() {
  const cardOverlap = {
    position: "relative",
    top: -55,
  };

  return (
    <>
      <Header />
      <div style={cardOverlap}>
        <MainTopCard />
        <StatsMiddleCard />
        <AboutBottomCard />
      </div>
    </>
  )
}

export default App
