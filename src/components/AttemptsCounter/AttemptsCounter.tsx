import BookmarkSvg from "../../svg/bookmark";
import "./AttemptsCounter.css";

function AttemptsCounter() {
  return (
    <div className="attemptsContainer">
      <BookmarkSvg size="15px" color="#808080" />
      <span className="attemptsCount">47/50 today</span>
    </div>
  );
}

export default AttemptsCounter;
