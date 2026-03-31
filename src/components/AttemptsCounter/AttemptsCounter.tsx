import BookmarkSvg from "@/src/svg/bookmark";
import "./AttemptsCounter.css";

type Limits = {
  per_minute_remaining: number;
  per_day_remaining: number;
  per_minute_total: number;
  per_day_total: number;
};

type Props = {
  limits: Limits | null;
};

function AttemptsCounter({ limits }: Props) {
  return (
    <div className="attemptsContainer">
      <BookmarkSvg size="15px" color="#808080" />
      <span className="attemptsCount">
        {limits
          ? `${limits.per_day_remaining}/${limits.per_day_total} today`
          : "Loading..."}
      </span>
    </div>
  );
}

export default AttemptsCounter;
