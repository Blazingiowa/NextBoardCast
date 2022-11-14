import {useState} from "react";

export default function ThemeTab(props: any) {
    const [isActive, setActive] = useState<boolean>(false);
    const ToggleClass = () => {
        setActive(!isActive);
    }

    return (
        <div id="theme-tab" className={isActive ? "open" : null!} onMouseEnter={ToggleClass} onMouseLeave={ToggleClass}>
            <div className="theme-tab-item switch-theme bg-white" data-theme="theme-default" data-toggle="tooltip"
                 title="Light"></div>
            <div className="theme-tab-item switch-theme bg-dark" data-theme="theme-dark" data-toggle="tooltip"
                 title="Dark"></div>
        </div>
    )
}