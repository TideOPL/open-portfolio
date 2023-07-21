import { useRouter } from "next/router"

interface Props {
    url: string
    children?: React.ReactNode
    primary?: boolean
    shallow?: boolean
}

const NavButton = ({url, children, primary, shallow=false}: Props) => {
    const router = useRouter();

    const onClick = async () => {
        if (router.query.page == `${url}`) {
            await router.push('/?page=' + 'home', undefined, { shallow });
            return;
        }

        if (shallow) {
            await router.push('/?page=' + url, undefined, { shallow });
            return;
        }

        await router.push(url)
    }

    return (
        <div>
            <button onClick={() => void onClick()} className={`
                flex py-1 px-3 rounded-lg
                ${primary ? 'bg-gray-300/75 hover:bg-gray-300/60' : 'bg-inherit'} 
                font-mono font-semibold uppercase
                hover:text-black/80
                
                dark:text-white
                ${primary ? 'dark:bg-gray-700/75 dark:hover:bg-gray-700/60' : 'bg-inherit'}
                dark:hover:text-white/80`}
            >
                {children}
            </button>
        </div>
    )
}

export default NavButton;