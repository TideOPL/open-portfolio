import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Title from "./hero/Title";
import Hero from "./Hero";
import Portfolio from "../portfolio/Portfolio";

const Content = () => {
    const [currentPage, setCurrentPage] = useState<'home' | 'contact' | 'portfolio'>('home')
    const router = useRouter();

    useEffect(() => {
        const page = router.query.page;
        if (page == 'contact') {
            setCurrentPage('contact');
            return;
        }
        if (page == 'portfolio') {
            setCurrentPage('portfolio')
            return;
        }

        setCurrentPage('home')
        return;
  
    }, [router.query.page])

    switch(currentPage) {
        case 'home':
            return (
                <>
                    <Hero />
                    <div className="space-y-2.5">
                        <div className="text-center font-mono dark:text-white">
                            {"I'm a Junior Software Engineer skilled in Full-Stack Website Development & React Native."}     
                        </div>
                    </div>
                </>
            );
        case 'contact':
            return (
                <>
                    <div>
                        <Title />
                    </div>
                </>
            );
        case 'portfolio':
            return (
                <div className="min-w-full justify-center items-center space-y-10">
                    <Title />
                    <div className="min-w-full min-h-full">
                        <Portfolio />
                    </div>
                </div>
            )
    }
}

export default Content;