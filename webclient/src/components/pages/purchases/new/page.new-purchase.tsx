import './page.new-purchase.scss';
import React from "react";
import SharedPageTitle from "../../../shared/page-title/shared.page-title";

class PageNewPurchase extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <SharedPageTitle Title="Pages.NewPurchase.Title" />
            </>
        );
    }
}

export default PageNewPurchase;