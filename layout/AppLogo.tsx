import { FC, HTMLAttributes, useContext } from "react";
import { LayoutContext } from "./context/layoutcontext";

const AppLogo: FC<HTMLAttributes<HTMLImageElement>> = (props) => {
    const { layoutConfig } = useContext(LayoutContext);

    return <img {...props}
        alt="logo"
        src={`/layout/images/logo-${layoutConfig.colorScheme !== 'light' ? 'white' : 'dark'}.svg`} />;
};

export default AppLogo;
