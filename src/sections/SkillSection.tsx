import { SKILL_LIST } from "@/constants/constants";
import { IImageCompProp } from "@/types/type";
import { useState } from "react";

interface IProp {
  target: boolean;
}

export default function SkillSection({ target }: IProp) {
  const [idx, setIdx] = useState(0);
  function ImgComponent({ src, text }: IImageCompProp) {
    return (
      <div className="flex items-center w-24 m-8 relative group">
        <img
          src={`/${src}.png`}
          width={96}
          className="mb-2 group-hover:scale-110 group-hover:duration-100 group-hover:blur-sm"
        />
        <span
          className=" hidden group-hover:inline group-hover:visible 
        group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 
        group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] 
        group-hover:font-bold hover:cursor-default"
        >
          {text}
        </span>
      </div>
    );
  }

  function SkillBox() {
    return (
      <>
        {SKILL_LIST.map((v) => {
          return (
            <div className="relative h-full border-2 rounded-lg border-black p-8 grid grid-cols-2">
              <span className="absolute font-bold text-xl top-0 left-1/2 translate-y-4 translate-x-[-50%]">
                {v.title}
              </span>
              {/* <img
    src="/left-arrow.png"
    width={32}
    className="absolute left-0 top-1/2 translate-y-[-50%]"
  />
  <img
    src="/right-arrow.png"
    width={32}
    className="absolute right-0 top-1/2 translate-y-[-50%]"
  /> */}
              {v.items.map((v) => {
                return <ImgComponent key={v.src} src={v.src} text={v.text} />;
              })}
            </div>
          );
        })}
      </>
    );
  }

  return (
    <section
      id="section2"
      className="max-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-32 flex min-h-screen items-center"
    >
      <h2 className="hidden">Skill</h2>
      {/* <h1>Skill</h1> */}
      <SkillBox />
    </section>
  );
}
