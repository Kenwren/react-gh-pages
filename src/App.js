import './App.css';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Banner from './components/Banner';


//Pics
import aware from './assets/img/aware-shadow.png';
import blockchain from './assets/img/bc2.png';
import generation from './assets/img/gen.png';
import thought from './assets/img/thought.png';

function App() {
  const pics = [aware,blockchain,generation,thought];

  return (
    <div className="App">

      <Header></Header>
      <Banner herobg='hero-bg' heroheader='hero-header' herotext='hero-text'
        primarybtn='primary-button' secondarybtn='secondary-button'
        text="let the express handle this"
        title="Think outside the box"
        >
      </Banner>
      <Gallery pics={pics}>

      </Gallery>
      <Footer></Footer>

    </div>
  );
}
export default App;