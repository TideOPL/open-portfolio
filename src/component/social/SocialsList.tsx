import Social from "./Social"

const SocialsList = () => {
    return (
        <div className="flex flex-row min-w-full items-center space-x-11 ">
            <Social url="https://github.com/TideOPL/" svg="logo-github.svg" alt="Github" />
            <Social url="https://www.linkedin.com/in/obi-newman-287b3424b/" svg="logo-linkedin.svg" alt="LinkedIn" />
            <Social url="https://twitter.com/ObiNewman0/" svg="logo-twitter.svg" alt="Twitter" />
        </div>
    )
}

export default SocialsList;