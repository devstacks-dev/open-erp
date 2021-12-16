import './page.view-purchases.scss';
import React from "react";
import SharedPageTitle from "../../../shared/page-title/shared.page-title";

class PageViewPurchases extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <SharedPageTitle Title="Pages.ViewPurchases.Title" />
            </>
        );
    }
}

export default PageViewPurchases;