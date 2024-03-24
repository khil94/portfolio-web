import { SIZE, SKILL_LIST } from "@/constants/constants";
import { IImageCompProp } from "@/types/type";
import { useEffect, useRef, useState } from "react";

export default function SkillSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const idx = useRef(0);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      setWidth(window.screen.width);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function translator(target: number) {
    if (wrapperRef.current) {
      wrapperRef.current.style.setProperty(
        "transform",
        `translateX(-${target * 320}px)`
      );
    }
  }

  function ImgComponent({ src, text }: IImageCompProp) {
    return (
      <div className="flex items-center justify-center p-3 relative group">
        <div className=" min-w-24 min-h-24 flex items-center justify-center">
          <img
            src={`/${src}.png`}
            width={72}
            className=" group-hover:scale-110 transform group-hover:duration-100 group-hover:blur-sm"
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

  function SkillComponentList() {
    return (
      <>
        {SKILL_LIST.map((v) => {
          return (
            <div className={`relative min-w-80 py-8 grid grid-cols-2`}>
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

  function SkillBox() {
    if (width) {
      if (width < SIZE.lg) {
        return (
          <>
            <div
              className={`bg-white shadow-lime-700 shadow-lg relative w-80 border-2 rounded-lg border-black overflow-hidden`}
            >
              <div
                ref={wrapperRef}
                className={`slide-wrapper h-full flex duration-1000`}
              >
                <SkillComponentList />
              </div>
              <img
                src="/left-arrow.png"
                width={32}
                onClick={() => {
                  const target =
                    idx.current - 1 >= 0
                      ? idx.current - 1
                      : SKILL_LIST.length - 1;
                  translator(target);
                  idx.current = target;
                }}
                className="arrow absolute left-0 top-1/2 translate-y-[-50%] mb-2 active:opacity-40"
              />
              <img
                src="/right-arrow.png"
                width={32}
                onClick={() => {
                  const target =
                    idx.current + 1 < SKILL_LIST.length ? idx.current + 1 : 0;
                  translator(target);
                  idx.current = target;
                }}
                className="arrow absolute right-0 top-1/2 translate-y-[-50%] active:opacity-40"
              />
            </div>
          </>
        );
      }
    } else {
      return <>{/* 로딩 컴포넌트 넣을지 고민중 */}</>;
    }

    return (
      <>
        {SKILL_LIST.map((v) => {
          return (
            <div className="relative bg-white mx-3 h-full border-2 rounded-lg border-black p-8 grid grid-cols-2 shadow-lime-700 shadow-lg">
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
      className="max-auto from-lime-300 bg-gradient-to-b px-4 mob:py-8 mob:px-0 sm:py-16 sm:px-6 lg:px-8 lg:py-32 flex min-h-screen items-center justify-around"
    >
      <h2 className="hidden">Skill</h2>
      {/* <h1>Skill</h1> */}
      <SkillBox />
    </section>
  );
}
