import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            navBar: {
                'Dashboard': 'Dashboard',
                'Inventory': 'Inventory',
                'ListOrders': 'List orders',
                'ListProducts': 'List products',
                'ListMaterials': 'List materials',
                'ListSales': 'List sales',
                'ListSuppliers': 'List suppliers',
                'NewMaterial': 'New material',
                'NewOrder': 'New order',
                'NewProduct': 'New product',
                'NewSale': 'New sale',
                'NewSupplier': 'New supplier',
                'Purchases': 'Purchases',
                'Sales': 'Sales',
                'SignOut': 'Sign Out',
            },
            defaultPages: {
                'NotFound': 'Oops! This address does not exist.'
            }
        }
    },
    pt: {
        translation: {
            navBar: {
                'Dashboard': 'Painel',
                'Inventory': 'Estoque',
                'ListOrders': 'Listar ordens',
                'ListProducts': 'Listar produtos',
                'ListMaterials': 'Listar materiais',
                'ListSales': 'Listar vendas',
                'ListSuppliers': 'Listar fornecedores',
                'NewMaterial': 'Novo material',
                'NewOrder': 'Nova ordem',
                'NewProduct': 'Novo produto',
                'NewSale': 'Nova venda',
                'NewSupplier': 'Novo fornecedor',
                'Purchases': 'Compras',
                'Sales': 'Vendas',
                'SignOut': 'Sair',
            },
            defaultPages: {
                'NotFound': 'Ops! Esse endereço não existe.'
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