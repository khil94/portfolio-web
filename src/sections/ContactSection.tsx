import Email from "../../public/email.svg";
import Github from "../../public/github.svg";

export default function ContactSection() {
  return (
    <section
      id="section4"
      className="max-auto bg-slate-800 px-4 sm:px-6 lg:px-8 lg:pt-32 flex items-center"
    >
      <h2 className="hidden">Contact</h2>
      <div>
        <Github width={96} height={96} fill={"white"} />
        <Email width={96} height={96} fill={"white"} />
      </div>
    </section>
  );
}
