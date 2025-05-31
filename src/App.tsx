import data from "./data/sample_data.json";
import { ProgramCategory } from "./components";
import runningImage from "../src/assets/imgs/running.jpg";
import type { WorkoutType } from "./types/sample_data";
import warmUpImage from "../src/assets/imgs/warmup.png";
import mainSetImage from "../src/assets/imgs/mainset.png";
import cooldownImage from "../src/assets/imgs/cooldown.png";

function App() {
  //Running Test
  const { name, description, discipline, duration, segments } =
    data as WorkoutType;

  //timeline images array
  const TimeLineImages = [warmUpImage, mainSetImage, cooldownImage];

  return (
    <>
      <main className=" w-screen mx-auto">
        {/* primary component */}
        <ProgramCategory
          imgSrc={runningImage}
          name={name}
          description={description}
          discipline={discipline}
          duration={duration}
          segments={segments}
          images={TimeLineImages}
        />
      </main>
    </>
  );
}

export default App;
