import React from 'react';
import './App.css';
import Layout from '../Layout/Layout.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import Products from '../Products/Products.js'
import PRODUCTS from './PRODUCTS.json'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {  } from "react-router-dom";

/*
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Header /> <Products data={PRODUCTS} /> <Footer /> </> } />
          <Route path='/about' element={(<>about me</>)} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
*/


/*
function Home() {
  return (
    <>
      <Header />
      <Products data={PRODUCTS} />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={(<>about me</>)} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
*/


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Products data={PRODUCTS} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
