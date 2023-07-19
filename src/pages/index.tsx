import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Obi Newman</title>
        <meta name="description" content="A Junior Software Engineer skilled in Full-Stack Website Development & React Native.  " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center sm:justify-start lg:justify-center bg-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="h-32">
            <Image src={'/me.gif'} width={750} height={0} alt="Obi Newman"/>
          </div>
          <div className="flex flex-row space-x-1.5 font-mono">
            <div>
              A Software Developer skilled in
            </div>
            <Typewriter
              options={{
                strings: [' Typescript', ' React', ' React Native', ' MongoDB', ' C#', ' Java', 'Azure', 'REST'],
                autoStart: true,
                loop: true,
              }}
            />            
          </div>
          <div className="space-y-2.5">
            <div className="text-center font-mono">
            I'm a Junior Software Engineer skilled in Full-Stack Website Development & React Native.     
            </div>
          </div>
          <div className="flex-1">
              <div className="text-center font-mono">
                Socials            
              </div>
              <div className="flex flex-row min-w-full items-center space-x-11 ">
                <Link target="_blank" href={'https://github.com/TideOPL/'} rel="noopener noreferrer">
                  <Image src={'/logo-github.svg'} width={32} height={32} alt="Github"/>
                </Link>
                <Link target="_blank" href={'https://www.linkedin.com/in/obi-newman-287b3424b/'} rel="noopener noreferrer">
                  <Image src={'/logo-linkedin.svg'} width={32} height={32} alt="LinkedIn"/>
                </Link>
                <Link target="_blank" href={"https://twitter.com/ObiNewman0/"} rel="noopener noreferrer" >
                  <Image src={'/logo-twitter.svg'} width={32} height={32} alt="Twitter"/>
                </Link>
              </div>
            </div>

        </div>
      </main>
    </>
  );
}
