import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Subscribe from './components/Subscribe.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Hero />
        <Subscribe />
      </main>

      <Footer />
    </>
  );
}

export default App;

