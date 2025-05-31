import React from "react";
import type { SegmentType } from "../types/sample_data";

type SegmentContainerType = {
  segment: SegmentType;
  image: string;
};

export default function SegmentContainer({
  segment,
  image,
}: SegmentContainerType) {
  return (
    <div className=" px-4  py-6  font-medium min-h-[400px]  shadow-lg space-y-4 rounded-md">
      <div className=" flex items-end space-x-1">
        <img src={image} className="size-8   brightness-0 " />

        <h1 className=" text-xl">{segment.title}</h1>
      </div>
    </div>
  );
}
