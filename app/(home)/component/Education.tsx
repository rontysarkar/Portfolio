
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const Education = () => {
  return (
    <div id="Education" className="mt-20">
      <div className="mb-14">
        <h2 className="text-4xl font-extrabold text-white md:text-5xl">
          Education
        </h2>
        <div className="mt-3 h-[3px] w-40 rounded-full bg-gradient-to-r from-emerald-400 to-violet-500" />
        <p className="mt-4 max-w-xl text-sm text-gray-400">
          A brief look at my academic journey.
        </p>
      </div>

      <main className="relative z-20 w-full mt-8 md:flex md:items-center my-32 xl:mt-12">
        <div className="absolute w-full bg-indigo-500 -z-10 md:h-96 rounded-2xl"></div>

        <div className="w-full p-6 bg-indigo-500 space-y-10  md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
          <div className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[32rem] lg:w-[24rem] md:rounded-2xl ">
            <DirectionAwareHover imageUrl="/file.jpg">
              <h1>Ronty Sarkar</h1>
            </DirectionAwareHover>
          </div>

          <div className="mt-2 md:mx-6">
            <div className="space-y-4">
              <p className="text-3xl font-medium tracking-tight text-white">
                Diploma in Computer Science and Technology
              </p>
              <p className="text-blue-200 text-xl font-semibold">
                Dhaka Institute of Technology
              </p>
              <p className="text-blue-200 text-xl">January 2023 – Present</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Education;
