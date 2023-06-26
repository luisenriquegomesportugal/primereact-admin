import PrimeReact from 'primereact/api';
import { useLocalStorage } from 'primereact/hooks';
import { createContext, useEffect, useState } from 'react';
import { LayoutColorSchemes } from '../../types/layout';
import { ChildContainerProps, LayoutConfig, LayoutContextProps, LayoutState } from '../../types/types';
export const LayoutContext = createContext({} as LayoutContextProps);

export const LayoutProvider = ({ children }: ChildContainerProps) => {
    const [savedColorScheme, saveColorScheme] = useLocalStorage<LayoutColorSchemes>('light', 'color-scheme')
    
    const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
        ripple: true,
        inputStyle: 'filled',
        menuMode: 'static',
        colorScheme: 'light',
        scale: 14
    });

    const [layoutState, setLayoutState] = useState<LayoutState>({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    });

    const onMenuToggle = () => {
        if (isOverlay()) {
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, overlayMenuActive: !prevLayoutState.overlayMenuActive }));
        }

        if (isDesktop()) {
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive }));
        } else {
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive }));
        }
    };

    const showProfileSidebar = () => {
        setLayoutState((prevLayoutState) => ({ ...prevLayoutState, profileSidebarVisible: !prevLayoutState.profileSidebarVisible }));
    };

    const isOverlay = () => {
        return layoutConfig.menuMode === 'overlay';
    };

    const isDesktop = () => {
        return window.innerWidth > 991;
    };

    const changeTheme = (colorScheme: LayoutColorSchemes, noPersist?: boolean) => {
        PrimeReact.changeTheme?.(layoutConfig.colorScheme, colorScheme, 'theme-css', () => { 
            if (!noPersist) {
                saveColorScheme(colorScheme);
            }
            
            setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, colorScheme }));
        });
    }

    useEffect(() => {
        if (savedColorScheme && savedColorScheme !== 'light') {
            changeTheme('dark', true);
        }
    }, [savedColorScheme]); // eslint-disable-line

    const value: LayoutContextProps = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar,
        changeTheme,
        isDesktop
    };

    return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};
