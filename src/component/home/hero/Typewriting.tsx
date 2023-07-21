import Typewriter from "typewriter-effect";

const Typewriting = () => {
    return (
        <div className=" flex lg:flex-row lg:space-x-1.5 lg:text-base dark:text-white flex-col text-center font-mono ">
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
    )
}

export default Typewriting