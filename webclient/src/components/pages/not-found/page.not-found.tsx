import './page.not-found.scss';
import { useTranslation } from 'react-i18next';

function PageNotFound() {
    const { t } = useTranslation();

    return (
        <main className='page-not-found'>
            <h1>{t('defaultPages.NotFound')}</h1>
        </main>
    );
}

export default PageNotFound;