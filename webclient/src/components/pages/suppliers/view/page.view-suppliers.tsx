import './page.view-suppliers.scss';
import React from "react";
import SharedPageTitle from "../../../shared/page-title/shared.page-title";

class PageViewSuppliers extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <SharedPageTitle Title="Pages.ViewSuppliers.Title" />
            </>
        );
    }
}

export default PageViewSuppliers;