import { IHeading } from "@/types/type";

interface IProp {
  headlings: IHeading[];
  target: string;
}

export default function SideBarSection({ headlings, target }: IProp) {
  return (
    <aside className=" bg-amber-200 max-sm:hidden bg-opacity-50 fixed top-0 left-0 z-40 w-64 h-screen p-5">
      <ul>
        {headlings.map((h, i) => {
          return (
            <li
              key={"href_to_" + h.id}
              className={` flex items-center h-10 list-none transition-all duration-300 ${
                target === `section${i}` ? "font-bold text-red-500 text-lg" : ""
              }`}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${h.id}`)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                href={`#${h.id}`}
              >
                {h.title}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
