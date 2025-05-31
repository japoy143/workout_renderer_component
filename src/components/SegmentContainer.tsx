import { useState } from "react";

import type {
  DurationBlock,
  NestedBlock,
  SegmentType,
} from "../types/sample_data";
import Progressbar from "./Progressbar";

type SegmentContainerType = {
  segment: SegmentType;
  image: string;
  atIndex: number;
};

export default function SegmentContainer({
  segment,
  image,
  atIndex,
}: SegmentContainerType) {
  // check if nested block
  function isSetBlock(
    block: DurationBlock | NestedBlock
  ): block is NestedBlock {
    return block.type === "set";
  }

  // Check if any block in the segment is a NestedBlock
  function checkIfWorkoutIsSet(segment: SegmentType): boolean {
    return segment.blocks.some((block) => isSetBlock(block));
  }

  const [progressCount, setProgressCount] = useState<number>(0);

  //total blocks
  const totalCount = checkIfWorkoutIsSet(segment) ? 2 : segment.blocks.length;

  //percentage of progress
  const progressPercentage = (progressCount / totalCount) * 100;

  return (
    <div
      id={segment.title}
      className=" px-4  py-6  font-medium min-h-[200px]  shadow-lg space-y-4 rounded-md"
    >
      {/* heading  */}
      <div className=" flex  justify-between space-x-1">
        <div>
          <h1 className=" text-xl">{segment.title}</h1>
          <small>
            Progress: {progressCount}/{totalCount}
          </small>
        </div>
        <img src={image} className="size-8   brightness-0 " />
      </div>

      {/* segment list */}
      {segment.blocks.map((block, index) => {
        // segment set
        if (isSetBlock(block)) {
          return (
            <div key={index}>
              <div className=" flex space-x-4">
                <p>Reps:{block.reps}</p>
                <p>Render:{block.render}</p>
              </div>

              {block.blocks.map((setData, setIndex) => (
                <div
                  key={setIndex}
                  className=" mt-2 text-white bg-black/90 md:p-4 lg:p-6  min-h-[120px] rounded-md"
                >
                  <div className=" flex  items-center justify-between">
                    <small className=" text-white/80 hover:text-white  cursor-pointer">
                      {setData.intensity}
                    </small>
                    <p className="p-1 text-sm cursor-pointer rounded-full bg-white text-black">
                      {setData.duration.value}
                      {setData.duration.unit}
                    </p>
                  </div>

                  <div>
                    <h2 className=" text-xl">{setData.render}</h2>
                    <p className=" text-white/50">{setData.note}</p>
                  </div>

                  <div className=" flex justify-end  py-4 ">
                    <button
                      className=" cursor-pointer bg-white text-black py-2 px-4 rounded-md"
                      onClick={() =>
                        setProgressCount((count) =>
                          count < totalCount ? count + 1 : totalCount
                        )
                      }
                    >
                      Done
                    </button>
                  </div>
                </div>
              ))}
            </div>
          );
        }
        // segment duration interval
        else {
          return (
            <div
              key={index}
              className=" space-y-2 text-white bg-black/90 md:p-4 lg:p-6  min-h-[120px] rounded-md"
            >
              <div className=" flex  items-center justify-between">
                <small className=" text-white/80 hover:text-white  cursor-pointer">
                  {block.intensity}
                </small>
                <p className="p-1 text-sm cursor-pointer rounded-full bg-white text-black">
                  {block.duration.value}
                  {block.duration.unit}
                </p>
              </div>

              <div>
                <h2 className=" text-xl">{block.render}</h2>
                <p className=" text-white/50">{block.note}</p>
              </div>

              <div className=" flex justify-end  py-4 ">
                <button
                  className=" cursor-pointer bg-white text-black py-2 px-4 rounded-md"
                  onClick={() =>
                    setProgressCount((count) =>
                      count < totalCount ? count + 1 : totalCount
                    )
                  }
                >
                  Done
                </button>
              </div>
            </div>
          );
        }
      })}

      {/* progress bar */}
      <Progressbar count={progressPercentage} />
    </div>
  );
}
