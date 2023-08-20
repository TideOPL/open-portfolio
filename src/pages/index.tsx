import { motion } from "framer-motion";
import Head from "next/head";
import DarkToggle from "~/component/DarkToggle";
import Footer from "~/component/Footer";
import Content from "~/component/home/Content";
import Nav from "~/component/home/nav/Nav";
import SocialsList from "~/component/social/SocialsList";

const Home = () => {
  return (
    <div className="viewport-full bg-[#FDFDFD] dark:bg-[#1b1b1d]">
      <Head>
        <title>Obi Newman</title>
        <meta
          name="description"
          content="A Junior Software Engineer skilled in Full-Stack Website Development & React Native.  "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen min-w-full overflow-hidden bg-[#FDFDFD] dark:bg-[#1b1b1d]">
        <div className="top-container absolute flex min-h-fit min-w-full justify-between px-5 py-5">
          <DarkToggle Component={motion.div} />
          <Nav />
        </div>
        <div className="flex min-h-full min-w-full flex-col items-center sm:justify-start lg:justify-center">
          <div className="container flex h-full flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Content />
            <div className="flex-1">
              <div className="text-center font-mono dark:text-white">
                Socials
              </div>
              <SocialsList />
            </div>
          </div>
          <div className="justify-self-end">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
