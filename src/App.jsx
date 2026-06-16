import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import OrderModal from './components/modal/OrderModal';

const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div className="page-loader">Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
      <OrderModal />
    </div>
  );
}

export default App;
