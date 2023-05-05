import "./styles.css";
import ScrollNav from "./components/ScrollNav";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Home from "./pages/home";
import Products from "./pages/products";
import Contact from "./pages/contactInfo";

export default function App() {
  return (
    <div className="App">
      <header className="nav">
        <ScrollNav />
      </header>
      <div className="container">
        <section id="home">
          <div className="homeContainer">
            <Home />
          </div>
        </section>
        <section id="products">
          <div className="productContainer">
            <Products />
          </div>
        </section>
        <section id="contacts">
          <div className="mapContainer">
            <Contacts />
          </div>
          <div className="contact">
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
}
