import './page.new-supplier.scss';
import React from "react";
import SharedPageTitle from "../../../shared/page-title/shared.page-title";

class PageNewSupplier extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <SharedPageTitle Title="Pages.NewSupplier.Title" />
            </>
        );
    }
}

export default PageNewSupplier;