import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            navBar: {
                'Dashboard': 'Dashboard',
                'Inventory': 'Inventory',
                'List orders': 'List orders',
                'List products': 'List products',
                'List raw materials': 'List raw materials',
                'List sales': 'List sales',
                'List suppliers': 'List suppliers',
                'New material': 'New material',
                'New order': 'New order',
                'New product': 'New product',
                'New sale': 'New sale',
                'New supplier': 'New supplier',
                'Purchases': 'Purchases',
                'Sales': 'Sales',
                'Sign Out': 'Sign Out',
            }
        }
    },
    pt: {
        translation: {
            navBar: {
                'Dashboard': 'Painel',
                'Inventory': 'Estoque',
                'List orders': 'Listar ordens',
                'List products': 'Listar produtos',
                'List raw materials': 'Listar material',
                'List sales': 'Listar vendas',
                'List suppliers': 'Listar fornecedores',
                'New material': 'Novo material',
                'New order': 'Nova ordem',
                'New product': 'Novo produto',
                'New sale': 'Nova venda',
                'New supplier': 'Novo fornecedor',
                'Purchases': 'Compras',
                'Sales': 'Vendas',
                'Sign Out': 'Sair',
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false
        }
    }).then(() => {});

i18n.changeLanguage(navigator.language).then(() => {})

export default i18n;