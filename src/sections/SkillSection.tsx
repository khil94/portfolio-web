interface IProp {
  target: boolean;
}

export default function SkillSection({ target }: IProp) {
  return (
    <section
      id="section2"
      className="max-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pt-32 flex min-h-screen items-center"
    >
      <h2 className="hidden">Skill</h2>
      <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight h-auto text-slate-500">
        Skill
      </h1>
      <div className=" border-2 rounded-lg border-black p-8 grid grid-cols-3">
        <div className="w-24 m-8 ">
          {/* HTML */}
          <div className="relative group">
            <img
              src="/html.png"
              width={96}
              className="mb-2 group-hover:scale-110 group-hover:duration-100 group-hover:blur-sm"
            />
            <span className=" hidden group-hover:inline group-hover:visible group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:font-bold group-hover:cursor-default">
              HTML
            </span>
          </div>
          <div className=" rounded-xl bg-white ">
            <div className={`w-[80%] rounded-xl`}>
              <div
                className={`h-4 rounded-xl ${
                  target
                    ? "animate-progress bg-yellow-400 transition-width"
                    : ""
                }`}
              />
            </div>
          </div>
        </div>
        <div className="w-24 m-8 ">
          {/* CSS */}
          <div className="relative group">
            <img
              src="/css.png"
              width={96}
              className="mb-2 group-hover:scale-110 group-hover:duration-100 group-hover:blur-sm"
            />
            <span className=" hidden group-hover:inline group-hover:visible group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:font-bold group-hover:cursor-default">
              CSS
            </span>
          </div>
          <div className=" rounded-xl bg-white ">
            <div className={`w-[70%] rounded-xl`}>
              <div
                className={`h-4 rounded-xl ${
                  target
                    ? "animate-progress bg-yellow-400 transition-width"
                    : ""
                }`}
              />
            </div>
          </div>
        </div>
        <div className="w-24 m-8 ">
          {/* js */}
          <div className="relative group">
            <img
              src="/js.png"
              width={96}
              className="mb-2 group-hover:scale-110 group-hover:duration-100 group-hover:blur-sm"
            />
            <span className=" hidden group-hover:inline group-hover:visible group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:font-bold group-hover:cursor-default">
              Js
            </span>
          </div>
          <div className=" rounded-xl bg-white ">
            <div className={`w-[80%] rounded-xl`}>
              <div
                className={`h-4 rounded-xl ${
                  target
                    ? "animate-progress bg-yellow-400 transition-width"
                    : ""
                }`}
              />
            </div>
          </div>
        </div>
        <div className="w-24 m-8 ">
          {/* ts */}
          <div className="relative group">
            <img
              src="/ts.png"
              width={96}
              className="mb-2 group-hover:scale-110 group-hover:duration-100 group-hover:blur-sm"
            />
            <span className=" hidden group-hover:inline group-hover:visible group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:font-bold group-hover:cursor-default">
              Ts
            </span>
          </div>
          <div className=" rounded-xl bg-white ">
            <div className={`w-[70%] rounded-xl`}>
              <div
                className={`h-4 rounded-xl ${
                  target
                    ? "animate-progress bg-yellow-400 transition-width"
                    : ""
                }`}
              />
            </div>
          </div>
        </div>
        <div className="w-24 m-8 ">
          {/* react */}
          <div className="relative group">
            <img
              src="/react.png"
              width={96}
              className="mb-2 group-hover:scale-110 group-hover:duration-100 group-hover:blur-sm"
            />
            <span className=" hidden group-hover:inline group-hover:visible group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:font-bold group-hover:cursor-default">
              React
            </span>
          </div>
          <div className=" rounded-xl bg-white ">
            <div className={`w-[80%] rounded-xl`}>
              <div
                className={`h-4 rounded-xl ${
                  target
                    ? "animate-progress bg-yellow-400 transition-width"
                    : ""
                }`}
              />
            </div>
          </div>
        </div>
        <div className="w-24 m-8 ">
          {/* sass */}
          <div className="relative group">
            <img
              src="/sass.png"
              width={96}
              className="mb-2 group-hover:scale-110 group-hover:duration-100 group-hover:blur-sm"
            />
            <span className=" hidden group-hover:inline group-hover:visible group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:font-bold group-hover:cursor-default">
              Sass
            </span>
          </div>
          <div className=" rounded-xl bg-white ">
            <div className={`w-[50%] rounded-xl`}>
              <div
                className={`h-4 rounded-xl ${
                  target
                    ? "animate-progress bg-yellow-400 transition-width"
                    : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" border-2 rounded-lg border-black p-8 grid grid-cols-3">
        <div className="w-24 m-8 relative group">
          {/* slack */}
          <img
            src="/slack.png"
            width={96}
            className="mb-2 group-hover:scale-110 group-hover:duration-100 group-hover:blur-sm"
          />
          <span className=" hidden group-hover:inline group-hover:visible group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:font-bold group-hover:cursor-default">
            slack
          </span>
        </div>
        <div className="w-24 m-8 relative group">
          {/* monday */}
          <img
            src="/monday.png"
            width={96}
            className="mb-2 group-hover:scale-110 group-hover:duration-100 group-hover:blur-sm"
          />
          <span className=" hidden group-hover:inline group-hover:visible group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:font-bold group-hover:cursor-default">
            monday
          </span>
        </div>
        <div className="w-24 m-8 relative group">
          {/* git */}
          <img
            src="/git.png"
            width={96}
            className="mb-2 group-hover:scale-110 group-hover:duration-100 group-hover:blur-sm"
          />
          <span className=" hidden group-hover:inline group-hover:visible group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:font-bold group-hover:cursor-default">
            git
          </span>
        </div>
      </div>
    </section>
  );
}
