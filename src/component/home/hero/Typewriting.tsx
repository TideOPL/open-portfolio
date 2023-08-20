import Typewriter from "typewriter-effect";

const Typewriting = () => {
  return (
    <div className=" flex flex-col text-center font-mono dark:text-white lg:flex-row lg:space-x-1.5 lg:text-base ">
      <div>A Software Developer skilled in</div>
      <Typewriter
        options={{
          strings: [
            "Typescript",
            "React",
            "React Native",
            "MongoDB",
            "C#",
            "Java",
            "Azure",
            "REST",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Typewriting;
