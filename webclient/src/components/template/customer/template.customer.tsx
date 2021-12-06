import { Outlet } from 'react-router-dom';
import { TopMenu } from '../parts';

function TemplateCustomer() {
    return (
        <div className='template-customer'>
            <TopMenu />
            <Outlet />
        </div>
    );
}

export default TemplateCustomer;