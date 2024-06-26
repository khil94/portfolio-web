import { useEffect, useState } from "react";

export default function MainSection() {
  const [h1, setH1] = useState("");

  useEffect(() => {
    const str = "FrontEnd 개발자 김효일의 포트폴리오입니다.";
    const getStrByWord = setTimeout(() => {
      if (h1.length !== str.length) {
        setH1(str.slice(0, h1.length + 1));
      }
    }, 120);

    return () => clearTimeout(getStrByWord);
  });
  return (
    <section
      id="section0"
      className="bg-main md:bg-contain bg-cover max-auto px-4 sm:px-6 lg:px-8 flex min-h-screen items-center"
    >
      <h2 className="hidden">Main</h2>
      <div className="w-full flex items-center">
        <h1 className=" font-bold leading-relaxed after:content-[''] after:ml-1 after:w-1 after:animate-blink after:border-l-white after:border-l-4 break-words mx-auto text-5xl text-white">
          {h1}
        </h1>
      </div>
    </section>
  );
}
