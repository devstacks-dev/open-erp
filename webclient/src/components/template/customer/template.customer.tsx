import { Outlet } from 'react-router-dom';
import Parts from '../parts';

function TemplateCustomer() {
    return (
        <div className='template-customer'>
            <Parts.TopMenu />
            <Outlet />
        </div>
    );
}

export default TemplateCustomer;