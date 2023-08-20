import Image from "next/image";
import Link from "next/link";
interface Props {
  title: string;
  subtitle: string;
  body: string;
  image: string;
  imageType: "contain" | "cover";
  imagePadding?: number;
  url?: string;
}

const PortfolioItem = ({
  title,
  subtitle,
  image,
  url,
  imageType,
  imagePadding,
}: Props) => {
  return (
    <button className="group relative flex h-56 min-w-full cursor-default overflow-hidden rounded-lg bg-slate-700 dark:bg-slate-800  ">
      <div
        className={`transition ease-linear group-hover:opacity-30 group-focus:opacity-30`}
      >
        <Image
          src={image}
          alt={title}
          className={"flex " + `${imagePadding ? "py-12" : "py-0"}`}
          fill
          objectFit={imageType}
        />
      </div>

      <div className="z-40 flex h-full w-full flex-col justify-end p-5 transition-all delay-75 group-hover:items-center group-hover:justify-center group-focus:items-center group-focus:justify-center">
        <div className="flex font-mono text-lg font-semibold text-white">
          {title}
        </div>
        <div className="flex font-mono font-semibold text-white group-hover:hidden group-focus:hidden">
          {subtitle}
        </div>
        {/* 
            <div className="group-hover:flex group-focus:flex hidden text-white font-mono font-semibold">
                {body}
            </div> 
        */}
        {url && (
          <Link
            target="_blank"
            href={url}
            rel="noopener noreferrer"
            className="hidden justify-self-end text-center font-mono text-sm font-medium text-white underline group-hover:flex group-focus:flex"
          >
            {title}
          </Link>
        )}
      </div>
    </button>
  );
};

export default PortfolioItem;
