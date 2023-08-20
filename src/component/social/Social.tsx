import Link from "next/link";
import Image from "next/image";

interface Props {
  svg: string;
  url: string;
  alt: string;
}

const Social = ({ svg, url, alt }: Props) => {
  return (
    <>
      <Link
        target="_blank"
        href={url}
        rel="noopener noreferrer"
        className="hover:opacity-40"
      >
        <Image
          src={"/" + svg}
          width={32}
          height={32}
          alt={alt}
          className="fill-white"
        />
      </Link>
    </>
  );
};

export default Social;
