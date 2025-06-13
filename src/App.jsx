import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'; // Remove BrowserRouter import
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const Home = React.lazy(() => import('./pages/Home'));
const ProductRural = React.lazy(() => import('./pages/ProductRural'));
const ProductProduction = React.lazy(() => import('./pages/ProductProduction'));
const ProductMeals = React.lazy(() => import('./pages/ProductMeals'));
const ProductConstruction = React.lazy(() => import('./pages/ProductConstruction'));
const Services = React.lazy(() => import('./pages/Services'));
const Contacts = React.lazy(() => import('./pages/Сontacts'));
const AboutCompany = React.lazy(() => import('./pages/AboutСompany'));
const ProductEducation = React.lazy(() => import('./pages/ProductEducation'));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductRural />} />
          <Route path="/productProduction" element={<ProductProduction />} />
          <Route path="/productConstruction" element={<ProductConstruction />} />
               <Route path="/productEducation" element={<ProductEducation />} />
           <Route path="/productMeals" element={<ProductMeals />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/aboutCompany" element={<AboutCompany />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
