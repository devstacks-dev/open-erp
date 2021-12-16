import './page.view-products.scss';
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function PageViewProducts() {
    const { t } = useTranslation();

    return (
        <Row>
            <h1>{t('Pages.ProductsView.Title')}</h1>
        </Row>
    );
}

export default PageViewProducts;