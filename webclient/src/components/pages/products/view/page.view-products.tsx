import './page.view-products.scss';
import SharedPageTitle from "../../../shared/page-title/shared.page-title";
import React from "react";

class PageViewProducts extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <SharedPageTitle Title="Pages.ViewProducts.Title" />
            </>
        );
    }
}

export default PageViewProducts;