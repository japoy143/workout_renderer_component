import StartButton from "./StartButton";
import SegmentTimeLine from "./SegmentTimeLine";
import type { SegmentType } from "../types/sample_data";
import SegmentContainer from "./SegmentContainer";

type ProgramCategoryProps = {
  imgSrc: string;
  name: string;
  description: string;
  discipline: string;
  duration: {
    value: number;
    unit: string;
  };
  images: string[];
  segments: SegmentType[];
};

export default function ProgramCategory({
  imgSrc,
  name,
  description,
  discipline,
  images,
  segments,
}: ProgramCategoryProps) {
  //scroll to the first item
  const scrollStart = () => {
    const element = document.getElementById("Warmup");
    element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className=" size-full md:px-44 xl:px-96 py-10 space-y-6 ">
      {/* program image */}
      <div className=" h-[250px]">
        <img src={imgSrc} alt="name" className="h-full w-full object-cover" />
      </div>

      {/* heading text */}
      <div className=" grid grid-cols-2">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-justify">{description}</p>

          <div className="my-4 px-4 py-2 text-xs rounded-full bg-black/20 w-fit cursor-pointer">
            {discipline}
          </div>

          <StartButton action={scrollStart} buttonName="Start" />
        </div>

        {/* segments timeline */}
        <div className=" flex flex-col space-y-2 pl-8 justify-center ">
          {segments.map((workout, index) => (
            <SegmentTimeLine
              title={workout.title}
              icon={images[index]}
              index={index + 1}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className=" px-6">
        {segments.map((item, index) => (
          <SegmentContainer
            segment={item}
            key={index}
            image={images[index]}
            atIndex={index}
          />
        ))}
      </div>
    </section>
  );
}
