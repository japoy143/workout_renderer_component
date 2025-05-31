type SegmentTimeLineType = {
  title: string;
  icon: string;
  index: number;
};

export default function SegmentTimeLine({
  title,
  icon,
  index,
}: SegmentTimeLineType) {
  //smooth scroll to section
  const scrollToSection = () => {
    const element = document.getElementById(title);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <div
      className=" bg-black hover:bg-black/85 flex justify-between p-4 text-white cursor-pointer"
      onClick={scrollToSection}
    >
      <p className=" border-r-1 border-white  w-[20px]">{index}</p>
      <p>{title}</p>
      <img src={icon} alt={title} className=" size-6" />
    </div>
  );
}
