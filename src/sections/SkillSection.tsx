import { SKILL_ITEM } from "@/constants/constants";
import { IImageCompProp } from "@/types/type";
import { useState } from "react";

interface IProp {
  target: boolean;
}

export default function SkillSection({ target }: IProp) {
  const [currentSkill, setCurrentSkill] = useState<IImageCompProp>();
  const [show, setShow] = useState(false);

  function SkillDetailComponent() {
    return (
      <div className=" w-96 h-full border-2 rounded-lg border-black p-8 flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <img
            src={`/${currentSkill?.src}.png`}
            width={128}
            className="mb-2 group-hover:scale-110 group-hover:duration-100 group-hover:blur-sm"
          />
          <span className=" text-3xl font-bold">{currentSkill?.text}</span>
        </div>
        {currentSkill?.prof && (
          <div className="mt-4">
            <div className=" rounded-xl bg-white ">
              <div
                style={{ width: `${currentSkill.prof}%` }}
                className={`rounded-xl`}
              >
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
        )}
      </div>
    );
  }

  function handleImgClick(val: IImageCompProp) {
    setCurrentSkill(val);
  }

  function ImgComponent({ src, text, prof }: IImageCompProp) {
    return (
      <div
        className="flex items-center w-24 m-8 relative group cursor-pointer"
        onClick={() => handleImgClick({ src, text, prof })}
      >
        <img
          src={`/${src}.png`}
          width={96}
          className="mb-2 group-hover:scale-110 group-hover:duration-100 group-hover:blur-sm"
        />
        <span
          className=" hidden group-hover:inline group-hover:visible 
        group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 
        group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] 
        group-hover:font-bold "
        >
          {text}
        </span>
      </div>
    );
  }

  return (
    <section
      id="section2"
      className="max-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pt-32 flex min-h-screen items-center"
    >
      <h2 className="hidden">Skill</h2>

      <div className=" h-full border-2 rounded-lg border-black p-8 grid grid-cols-3">
        {SKILL_ITEM.map((v) => {
          return (
            <ImgComponent key={v.src} src={v.src} text={v.text} prof={v.prof} />
          );
        })}
      </div>
      <SkillDetailComponent />
    </section>
  );
}
