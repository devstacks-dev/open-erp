import './page.new-sale.scss';
import React from "react";
import SharedPageTitle from "../../../shared/page-title/shared.page-title";

class PageNewSale extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <SharedPageTitle Title="Pages.NewSale.Title" />
            </>
        );
    }
}

export default PageNewSale;