import './App.css';
import Header from './Header';
import Hero from './Hero'
import Join from './Join';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Hero />
        <Join />
        <Footer />
      </header>
    </div>
  )
}

export default App;
