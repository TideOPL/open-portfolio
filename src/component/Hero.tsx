import Typewriter from "typewriter-effect";


const Hero = () => {
    return (
        <>
            <div className="animate-text-flicker-out-glow dark:animate-text-flicker-out-glow-dark dark:text-white font-extrabold uppercase text-5xl h-fit">
                obi newman
            </div>
            <div className="flex lg:flex-row lg:space-x-1.5 lg:text-base dark:text-white flex-col text-center font-mono ">
                <div>
                A Software Developer skilled in
                </div>
                <Typewriter
                options={{
                    strings: [" Typescript", " React", " React Native", " MongoDB", " C#", " Java", "Azure", "REST"],
                    autoStart: true,
                    loop: true,
                }}
                />            
            </div>
        </>
    )
}

export default Hero;