import { IProject } from "@/types/type";

interface IProp {
  data: IProject;
  isTarget: boolean;
}

export default function ProjectDetailSection({ data, isTarget }: IProp) {
  return (
    <div
      key={data.name + "-wrapper"}
      className={`flex even:justify-end w-full mb-12 group ${
        isTarget ? "animate-appear even:animate-appearRight" : "opacity-0"
      }`}
    >
      <div className="border-2 group-even:border-red-300 shadow-xl group-odd:border-indigo-400 p-8 rounded-lg ">
        <h3 id={data.name} className=" font-semibold mb-3">
          {data.name}
        </h3>
        <div>
          {data.detail.map((v) => {
            return <li key={data.name + v}>{v}</li>;
          })}
        </div>
      </div>
    </div>
  );
}
