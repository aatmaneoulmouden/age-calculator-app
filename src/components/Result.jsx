import { useSnapshot } from "valtio";
import { results } from "../states/results";

const Result = () => {
  const snapResults = useSnapshot(results);
  return (
    <div className="result pt-10">
      <div className="result-label years">
        <span className="result-value">
          {snapResults.years ? snapResults.years : "--"}
        </span>{" "}
        years
      </div>
      <div className="result-label months">
        <span className="result-value">
          {snapResults.months ? snapResults.months : "--"}
        </span>{" "}
        months
      </div>
      <div className="result-label days">
        <span className="result-value">
          {snapResults.days ? snapResults.days : "--"}
        </span>{" "}
        days
      </div>
    </div>
  );
};

export default Result;
