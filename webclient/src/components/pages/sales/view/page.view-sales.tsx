import './page.view-sales.scss';
import React from "react";
import SharedPageTitle from "../../../shared/page-title/shared.page-title";

class PageViewSales extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <SharedPageTitle Title="Pages.ViewSales.Title" />
            </>
        );
    }
}

export default PageViewSales;