import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
// import Players from './components/Players';
import Main from './components/Main';
import MainFilms from './components/MainFilms';
import Footer from './components/Footer';
function App () {
  return (
    <div className='App'>
      <Navigation />
      {/* <Main /> */}
      <MainFilms />
      <Footer />
    </div >
  );
}
export default App;
