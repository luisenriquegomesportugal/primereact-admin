import { AppMenuItem } from '../types/types';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';

const AppMenu = () => {
    const model: AppMenuItem[] = [
        {
            label: 'Início',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
            ]
        },
        {
            label: 'Refukids',
            items: [
                { label: 'Listagem', icon: 'pi pi-fw pi-list', to: '/refukids' },
                { 
                    label: 'Chamada', 
                    icon: 'pi pi-fw pi-file-edit', 
                    items: [
                        { label: 'Refubabys', to: '/refukids/chamadas/refubabys', preventExact: true },
                        { label: 'Refukids 1', to: '/refukids/chamadas/refukids1', preventExact: true },
                        { label: 'Refukids 2', to: '/refukids/chamadas/refukids2', preventExact: true },
                        { label: 'Refuteens', to: '/refukids/chamadas/refuteens', preventExact: true },
                    ]
                },
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
