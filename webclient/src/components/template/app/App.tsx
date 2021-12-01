import React from 'react';
import './App.scss';
import Parts from './parts';
import Pages from '../../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../../pages/dashboard/dashboard';

function App() {
  return (
    <div className="App">
        <Parts.TopMenu />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />}>
                    <Route path='sales/list' element={<Pages.ListSales />} />
                    <Route path='sales/add' element={<Pages.NewSale />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
