import { SKILL_LIST } from "@/constants/constants";
import { IImageCompProp } from "@/types/type";
import { useEffect, useState } from "react";

interface IProp {
  target: boolean;
}

export default function SkillSection({ target }: IProp) {
  const [idx, setIdx] = useState(0);
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      setWidth(window.screen.width);
      console.log(window.screen.width, width);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function ImgComponent({ src, text }: IImageCompProp) {
    return (
      <div className="flex items-center w-24 m-8 relative group">
        <div className=" w-24 h-24 flex items-center">
          <img
            src={`/${src}.png`}
            width={96}
            className=" group-hover:scale-110 group-hover:duration-100 group-hover:blur-sm"
          />
        </div>
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
    if (width && width <= 1440) {
      return (
        <>
          <div className="relative mx-3 h-full border-2 rounded-lg border-black p-8 grid grid-cols-2">
            <span className="absolute font-bold text-lg top-0 left-1/2 translate-y-4 translate-x-[-50%]">
              {SKILL_LIST[idx].title}
            </span>
            <img
              src="/left-arrow.png"
              width={32}
              onClick={() => setIdx(idx - 1 > 0 ? idx - 1 : 0)}
              className="arrow absolute left-0 top-1/2 translate-y-[-50%] mb-2 active:opacity-40"
            />
            <img
              src="/right-arrow.png"
              width={32}
              onClick={() =>
                setIdx(
                  idx + 1 < SKILL_LIST.length - 1
                    ? idx + 1
                    : SKILL_LIST.length - 1
                )
              }
              className="arrow absolute right-0 top-1/2 translate-y-[-50%] active:opacity-40"
            />
            {SKILL_LIST[idx].items.map((v) => {
              return <ImgComponent key={v.src} src={v.src} text={v.text} />;
            })}
          </div>
        </>
      );
    }

    return (
      <>
        {SKILL_LIST.map((v) => {
          return (
            <div className="relative mx-3 h-full border-2 rounded-lg border-black p-8 grid grid-cols-2">
              <span className="absolute font-bold text-lg top-0 left-1/2 translate-y-4 translate-x-[-50%]">
                {v.title}
              </span>
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
      className="max-auto px-4 mob:py-8 mob:px-0 sm:py-16 sm:px-6 lg:px-8 lg:py-32 flex min-h-screen items-center justify-center"
    >
      <h2 className="hidden">Skill</h2>
      {/* <h1>Skill</h1> */}
      <SkillBox />
    </section>
  );
}
