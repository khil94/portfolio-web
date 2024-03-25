import Email from "../../public/email.svg";
import Github from "../../public/github.svg";

export default function ContactSection() {
  return (
    <section id="section4" className="max-auto bg-slate-800 flex items-center">
      <h2 className="hidden">Contact</h2>
      <div className="flex w-full h-14 items-center justify-center ">
        <a href="https://github.com/khil94">
          <Github width={48} height={48} fill={"white"} />
        </a>
        <a href="mailto: khilkhil@naver.com">
          <Email width={48} height={48} fill={"white"} />
        </a>
      </div>
    </section>
  );
}
