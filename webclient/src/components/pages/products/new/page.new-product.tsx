import './page.new-product.scss';
import React from "react";
import SharedPageTitle from "../../../shared/page-title/shared.page-title";

class PageNewProduct extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <SharedPageTitle Title="Pages.NewProduct.Title" />
            </>
        );
    }
}

export default PageNewProduct;