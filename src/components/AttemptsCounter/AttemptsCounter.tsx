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
  const getColor = () => {
    if (!limits) return "#808080";
    const ratio = limits.per_day_remaining / limits.per_day_total;
    if (ratio >= 0.95) return "red";
    if (ratio >= 0.75) return "yellow";
    return "#808080";
  };

  return (
    <div className="attemptsContainer">
      <BookmarkSvg size="15px" color="#808080" />
      <span className="attemptsCount" style={{ color: getColor() }}>
        {limits
          ? `${limits.per_day_remaining}/${limits.per_day_total} today`
          : "Loading..."}
      </span>
    </div>
  );
}

export default AttemptsCounter;
