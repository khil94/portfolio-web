import { IHeading } from "@/types/type";

interface IProp {
  headlings: IHeading[];
  target: number;
}

export default function SideBarSection({ headlings, target }: IProp) {
  console.log(headlings);
  return (
    <aside className=" max-sm:hidden bg-white bg-opacity-50 fixed top-0 left-0 z-40 w-64 h-screen p-5">
      <ul>
        {headlings.map((h, i) => {
          return (
            <li
              className={` flex items-center h-10 list-none transition-all duration-300 ${
                target === i ? "font-bold text-red-500 text-lg" : ""
              }`}
            >
              <a href={`#${h.id}`}>{h.title}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
