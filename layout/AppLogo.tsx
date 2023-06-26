import { FC, HTMLAttributes, useContext } from "react";
import { LayoutContext } from "./context/layoutcontext";

type Props = HTMLAttributes<HTMLImageElement> & {
    icone?: boolean
}

const AppLogo: FC<Props> = ({ icone, ...props }) => {
    const { layoutConfig } = useContext(LayoutContext);

    return <img {...props}
        alt="logo"
        src={`/layout/images/${icone ? "icone" : "logo"}-${layoutConfig.colorScheme}.png`} />;
};

export default AppLogo;
