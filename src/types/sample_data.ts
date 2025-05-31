export type WorkoutType = {
  _id: string;
  name: string;
  description: string;
  discipline: string;
  duration: {
    value: number;
    unit: string;
  };
  segments: SegmentType[];
};

export type DurationBlock = {
  type: string;
  id: string;
  duration: {
    value: number;
    unit: string;
  };
  intensity: string;
  note: string;
  render: string;
};

export type NestedBlock = {
  type: string;
  id: string;
  reps: number;
  render: string;
  blocks: DurationBlock[];
};

export type SegmentType =
  | {
      type: "duration_interval";
      title: string;
      blocks: DurationBlock[];
    }
  | {
      type: "set";
      title: string;
      blocks: NestedBlock[];
    };

export type IdCollectionType = {
  atIndex: number;
  progress_count: number;
};
