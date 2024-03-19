export default function SkillSection() {
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
        <div className="w-24 m-4">
          {/* HTML */}
          <img src="/html.png" width={96} className="mb-2" />
          <div className=" rounded-xl bg-white ">
            <div className={`w-[80%] rounded-xl`}>
              <div
                className={`h-4 rounded-xl animate-progress bg-yellow-400 transition-width`}
              />
            </div>
          </div>
        </div>
        <div className="w-24 m-4">
          {/* CSS */}
          <img src="/css.png" width={96} className="mb-2" />
          <div className=" rounded-xl bg-white ">
            <div className={`w-[70%] rounded-xl`}>
              <div
                className={`h-4 rounded-xl animate-progress bg-yellow-400 transition-width`}
              />
            </div>
          </div>
        </div>
        <div className="w-24 m-4">
          {/* js */}
          <img src="/js.png" width={96} className="mb-2" />
          <div className=" rounded-xl bg-white ">
            <div className={`w-[80%] rounded-xl`}>
              <div
                className={`h-4 rounded-xl animate-progress bg-yellow-400 transition-width`}
              />
            </div>
          </div>
        </div>
        <div className="w-24 m-4">
          {/* ts */}
          <img src="/ts.png" width={96} className="mb-2" />
          <div className=" rounded-xl bg-white ">
            <div className={`w-[70%] rounded-xl`}>
              <div
                className={`h-4 rounded-xl animate-progress bg-yellow-400 transition-width`}
              />
            </div>
          </div>
        </div>
        <div className="w-24 m-4">
          {/* react */}
          <img src="/react.png" width={96} className="mb-2" />
          <div className=" rounded-xl bg-white ">
            <div className={`w-[80%] rounded-xl`}>
              <div
                className={`h-4 rounded-xl animate-progress bg-yellow-400 transition-width`}
              />
            </div>
          </div>
        </div>
        <div className="w-24 m-4">
          {/* sass */}
          <img src="/sass.png" width={96} className="mb-2" />
          <div className=" rounded-xl bg-white ">
            <div className={`w-[50%] rounded-xl`}>
              <div
                className={`h-4 rounded-xl animate-progress bg-yellow-400 transition-width`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
