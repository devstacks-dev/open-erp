import React from 'react';
import './App.scss';
import * as Pages from '../../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TemplateCustomer from '../customer/template.customer';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<TemplateCustomer/>}>
                        <Route  index element={<Pages.PageDashboard/>} />
                        <Route  path='sales' element={<Pages.PageViewSales/>} >
                            <Route  path='add' element={<Pages.PageNewSale/>} />
                        </Route>
                        <Route  path='products'        element={<Pages.PageViewProducts/>} />
                        <Route  path='products/add'    element={<Pages.PageNewProduct/>} />
                        <Route  path='inventory'       element={<Pages.PageViewMaterials/>} />
                        <Route  path='inventory/add'   element={<Pages.PageNewMaterial/>} />
                        <Route  path='purchase'        element={<Pages.PageViewPurchases/>} />
                        <Route  path='purchase/add'    element={<Pages.PageNewPurchase/>} />
                        <Route  path='supplier'        element={<Pages.PageViewSuppliers/>} />
                        <Route  path='supplier/add'    element={<Pages.PageNewSupplier/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
