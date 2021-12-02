import './page.view-sales.scss';
import { Outlet } from 'react-router-dom';

function PageViewSales() {
    return (
        <div className='view-sales-page'>
            <h1>Sales list page</h1>
            <Outlet/>
        </div>
    );
}

export default PageViewSales;