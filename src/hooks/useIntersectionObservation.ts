import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useIntersectionObservation(
  setter: Dispatch<SetStateAction<string>>
) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        if (target.dataset.id) {
          setter(target.dataset.id);
        }
      }
    });
  });

  return observer;
}

export function useScrollSpy() {
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    const observer = useIntersectionObservation(setCurrentId);
    const headingEls = Array.from(document.querySelectorAll("h1"));
    headingEls.forEach((v) => {
      console.log(v);
      observer.observe(v);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return currentId;
}
