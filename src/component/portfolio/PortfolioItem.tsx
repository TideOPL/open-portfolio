import Image from "next/image";
import Link from "next/link";
interface Props {
    title: string
    subtitle: string
    body: string
    image: string
    imageType: 'contain' | 'cover'
    imagePadding?: number
    url?: string;
}

const PortfolioItem = ({title, subtitle, image, url, imageType, imagePadding}: Props) => {
    return (
        <button className="group flex min-w-full h-56 cursor-default relative bg-slate-700 dark:bg-slate-800 rounded-lg overflow-hidden  ">
            <div className={`group-hover:opacity-30 group-focus:opacity-30 transition ease-linear`}>
                <Image
                    src={image}
                    alt={title}
                    className={'flex ' + `${imagePadding ? "py-12" : "py-0"}`}
                    fill
                    objectFit={imageType}
                />
            </div>

            <div className="flex z-40 w-full h-full p-5 justify-end group-hover:justify-center group-hover:items-center group-focus:justify-center group-focus:items-center flex-col transition-all delay-75">
                <div className="flex text-white font-mono font-semibold text-lg">
                    {title}
                </div>
                <div className="group-hover:hidden group-focus:hidden flex text-white font-mono font-semibold">
                    {subtitle}
                </div>
                {/* <div className="group-hover:flex group-focus:flex hidden text-white font-mono font-semibold">
                    {body}
                </div> */}
                {url &&
                    <Link target="_blank" href={url} rel="noopener noreferrer" className="group-hover:flex group-focus:flex hidden font-mono text-sm underline text-white font-medium text-center justify-self-end">
                        {title}
                    </Link>
                }
            </div>
        </button>
    );
}

export default PortfolioItem;