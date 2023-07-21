import type { MotionProps } from "framer-motion";
import Image from "next/image";
import useDarkMode from "use-dark-mode";

interface Props {
    Component: React.ComponentType<MotionProps>
}

const DarkToggle = ({Component}: Props) => {
    const darkMode = useDarkMode(true, {classNameDark: 'dark', classNameLight: 'light'});

    const onClick = () => {
        darkMode.toggle();
        const root = window.document.documentElement;
        root.classList.remove(darkMode.value == true ? 'dark' : 'light');
        root.classList.add(darkMode.value == true ? 'light' : 'dark');
    }

    return (
        <div>
            <button onClick={() => onClick()}>
                {darkMode.value == true &&
                    <Component initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Image src={'/moon.svg'} width={32} height={32} alt={'Dark Mode'}/>
                    </Component>
                }
                {darkMode.value != true &&
                    <Component initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Image src={'/sunny.svg'} width={32} height={32} alt={'Light Mode'}/>
                    </Component>
                }
            </button>
        </div>
    )
}

export default DarkToggle;