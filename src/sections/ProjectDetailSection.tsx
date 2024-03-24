import { IProject } from "@/types/type";

interface IProp {
  data: IProject;
}

export default function ProjectDetailSection({ data }: IProp) {
  return (
    <div
      key={data.name + "-wrapper"}
      className="flex even:justify-end w-full mb-12"
    >
      <div className="border-2 border-black p-8 rounded-lg">
        <h1 className=" font-semibold mb-3">{data.name}</h1>
        <div>
          {data.detail.map((v) => {
            return <div key={v}>{v}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
