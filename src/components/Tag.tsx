interface IProp {
  content: string;
}

export default function Tag({ content }: IProp) {
  return (
    <div className=" inline-block border-white border-2 bg-orange-500 rounded-3xl p-2 cursor-default text-white">
      #{content}
    </div>
  );
}
