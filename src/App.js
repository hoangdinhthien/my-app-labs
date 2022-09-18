import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Players from './Players';
import Footer from './Footer';
function App () {
  return (
    <div className='App'>
      <Navigation />
      <Players />
      <Footer />
    </div>
  );
}

export default App;
