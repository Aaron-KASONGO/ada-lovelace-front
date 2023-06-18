import logo from './logo.svg';
import './App.css';
import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainDrawer from './components/MainDrawer';
import { HomePage } from './components/content/HomePage';
import { ActivityPage } from './components/content/ActivityPage';
import { SportInfoPage } from './components/content/SportInfoPage';
import { MangerPage } from './components/content/MangerPage';
import { useState } from 'react';

function App() {
  const [planId, setPlanId] = useState(null);
  return (
    <>
      <Router>
        <Routes>
          <Route path='*' element={<h1>404 Page not founded !</h1>} />
          <Route path="/" element={<Layout />}>
            <Route index element={<div>L'index qu'il faut</div>} />
            <Route path='app' element={<MainDrawer planId={planId} />}>
              <Route path=':id?' element={<HomePage setPlanId={setPlanId} />} />
              <Route path="activities" element={<ActivityPage />} />
              <Route path="sportinfo" element={<SportInfoPage />} />
              <Route path="manger" element={<MangerPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

const Layout = () => {
  return <Outlet />
}

export default App;
