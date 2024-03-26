import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function IntersectionObservation(
  setter: Dispatch<SetStateAction<string>>
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (target.id) {
            setter(target.id);
          }
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  return observer;
}

export function useScrollSpy(target: string) {
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    const observer = IntersectionObservation(setCurrentId);
    const headingEls = Array.from(document.querySelectorAll(target));
    headingEls.forEach((v) => {
      observer.observe(v);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return currentId;
}
