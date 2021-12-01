import React from 'react';
import './App.scss';
import Parts from './parts';
import * as Pages from '../../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Parts.TopMenu/>
            <BrowserRouter>
                <Routes>
                    <Route  path='/'                element={<Pages.PageDashboard/>} />
                    <Route  path='/sales'           element={<Pages.PageViewSales/>} />
                    <Route  path='/sales/add'       element={<Pages.PageNewSale/>} />
                    <Route  path='/products'        element={<Pages.PageViewProducts/>} />
                    <Route  path='/products/add'    element={<Pages.PageNewProduct/>} />
                    <Route  path='/inventory'       element={<Pages.PageViewMaterials/>} />
                    <Route  path='/inventory/add'   element={<Pages.PageNewMaterial/>} />
                    <Route  path='/purchase'        element={<Pages.PageViewPurchases/>} />
                    <Route  path='/purchase/add'    element={<Pages.PageNewPurchase/>} />
                    <Route  path='/supplier'        element={<Pages.PageViewSuppliers/>} />
                    <Route  path='/supplier/add'    element={<Pages.PageNewSupplier/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
