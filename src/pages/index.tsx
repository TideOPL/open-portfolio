import { motion } from "framer-motion";
import Head from "next/head";
import DarkToggle from "~/component/DarkToggle";
import Hero from "~/component/Hero";
import SocialsList from "~/component/social/SocialsList";


const Home = () => {

  return (
    <>
      <Head>
        <title>Obi Newman</title>
        <meta name="description" content="A Junior Software Engineer skilled in Full-Stack Website Development & React Native.  " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen min-w-full bg-[#FDFDFD] dark:bg-[#1b1b1d] overflow-hidden">
        <div className="min-h-fit min-w-fit absolute px-5 py-5" >
          <DarkToggle Component={motion.div} />
        </div>
        <div className="flex min-w-full flex-col items-center sm:justify-start lg:justify-center">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Hero />
            <div className="space-y-2.5">
              <div className="text-center font-mono dark:text-white">
                {"I'm a Junior Software Engineer skilled in Full-Stack Website Development & React Native."}     
              </div>
            </div>
            <div className="flex-1">
                <div className="text-center font-mono dark:text-white">
                  Socials            
                </div>
                <SocialsList />
              </div>
          </div>

        </div>
      </main>
    </>
  );
}

export default Home;