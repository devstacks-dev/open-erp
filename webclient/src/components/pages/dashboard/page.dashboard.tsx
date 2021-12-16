import './page.dashboard.scss';
import React from "react";
import SharedPageTitle from "../../shared/page-title/shared.page-title";

class PageDashboard extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <SharedPageTitle Title="Pages.Dashboard.Title" />
            </>
        );
    }
}

export default PageDashboard;