import './page.not-found.scss';
import { useTranslation } from 'react-i18next';
import { Row } from "react-bootstrap";

function PageNotFound() {
    const { t } = useTranslation();

    return (
        <Row className='page-not-found'>
            <h1>{t('defaultPages.NotFound')}</h1>
        </Row>
    );
}

export default PageNotFound;