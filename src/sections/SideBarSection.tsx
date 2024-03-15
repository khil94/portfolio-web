import { IHeading } from "@/types/type";

interface IProp {
  headlings: IHeading[];
  target: number;
}

export default function SideBarSection({ headlings, target }: IProp) {
  console.log(headlings);
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen">
      {headlings.map((h, i) => {
        return (
          <li
            className={`transition-all duration-300 ${
              target === i ? "font-bold text-red-500 text-lg" : ""
            }`}
          >
            <a href={`#${h.id}`}>{h.title}</a>
          </li>
        );
      })}
    </aside>
  );
}
