import * as Pages from '../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TemplateBackOffice from '../template/back-office/template.back-office';
import './App.scss';
import React from "react";

class App extends React.Component {
    render(): JSX.Element {
        return (
            <div className='App'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<TemplateBackOffice/>}>
                            <Route  index                element={<Pages.PageDashboard/>} />
                            <Route  path='inventory'     element={<Pages.PageViewMaterials/>} />
                            <Route  path='inventory/add' element={<Pages.PageNewMaterial/>} />
                            <Route  path='products'      element={<Pages.PageViewProducts/>} />
                            <Route  path='products/add'  element={<Pages.PageNewProduct/>} />
                            <Route  path='purchase'      element={<Pages.PageViewPurchases/>} />
                            <Route  path='purchase/add'  element={<Pages.PageNewPurchase/>} />
                            <Route  path='sales'         element={<Pages.PageViewSales/>} />
                            <Route  path='sales/add'     element={<Pages.PageNewSale/>} />
                            <Route  path='supplier'      element={<Pages.PageViewSuppliers/>} />
                            <Route  path='supplier/add'  element={<Pages.PageNewSupplier/>} />

                            <Route  path='*'             element={<Pages.PageNotFound/>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
