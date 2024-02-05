import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturesProduct from './components/FeaturesProduct';
import Discount from './components/Discount';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Hero />
        <Services />
        <FeaturesProduct />
        <Discount />
        <Blogs />
        <Footer />
      </main>
    </div>
  );
}

export default App;
