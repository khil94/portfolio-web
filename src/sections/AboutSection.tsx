interface IProp {
  target: boolean;
}

export default function AboutSection({ target }: IProp) {
  return (
    <section
      id="section1"
      className="max-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 flex bg-white items-center"
    >
      <h2 className="hidden">About</h2>

      <div className="flex flex-col ">
        <div className=" bg-transparent">
          <div className="relative w-fit">
            <h1
              className={` relative mx-auto text-5xl text-left font-bold 
              ${
                target
                  ? "before:content-[''] before:bg-red-500 before:absolute before:w-full before:h-1 before:bottom-0 before:left-0 before:animate-drawLine"
                  : ""
              }
            `}
            >
              About Me
            </h1>
          </div>
          <div className=" p-5 text-1xl">
            <p className=" mb-2">
              <span className=" text-2xl font-bold">안녕하세요! </span>
              커뮤니케이션을 선호하는 개발자입니다. React를 주력으로 사용하는
              주니어 프론트엔드 개발자로, 1년간의 현업에서의 개발 경험이
              있습니다.
            </p>
            <p className=" mb-2">
              코딩 컨벤션을 맞추기 위한 회의나 코드 리뷰, 회의를 통한 의견교환등
              서로간의 커뮤니케이션이 자주 일어나고 이를 통해 개발 효율이
              올라가는 것을 좋아합니다.
            </p>
            <p className=" ">
              사용자와 가장 직접적으로 상호작용하는 프론트엔드를 담당하고 있는
              만큼, 다양한 의견을 듣고 반영하고 싶습니다.
            </p>
          </div>
        </div>
        <div>
          <div className="relative w-fit">
            <h1
              className={`mx-auto text-5xl text-left  font-bold ${
                target
                  ? "before:content-[''] before:bg-red-500 before:absolute before:w-full before:h-1 before:bottom-0 before:left-0 before:animate-drawLine"
                  : ""
              }`}
            >
              Education
            </h1>
          </div>
          <div className=" p-5">
            <p className=" ">
              명지대학교 용인캠퍼스 컴퓨터학과 졸업(2014 ~ 2020)
            </p>
          </div>
        </div>
        <div>
          <div className="relative w-fit">
            <h1
              className={`mx-auto text-5xl text-left  font-bold ${
                target
                  ? "before:content-[''] before:bg-red-500 before:absolute before:w-full before:h-1 before:bottom-0 before:left-0 before:animate-drawLine"
                  : ""
              }`}
            >
              Career
            </h1>
          </div>
          <div className=" p-5">
            <p className=" ">인공지능연구원 FE엔지니어(2021 ~ 2022)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
