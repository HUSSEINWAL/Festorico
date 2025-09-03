import Header from './Header.jsx';
import { Routes, Route, } from 'react-router-dom';
import BtnLogo from './BtnLogo.jsx';
import SlideShow from './slideShow.jsx';
import Places from './places.jsx';
import Bottom from './bottom.jsx';
import Footer from './footer.jsx';
function App() {

  return (
    <>
      <Header />

      <BtnLogo />
      <Places />
      <SlideShow />
      <Bottom />
      <Footer />
    </>
  );
}

export default App
