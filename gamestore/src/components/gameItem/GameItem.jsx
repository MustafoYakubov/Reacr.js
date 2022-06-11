import "./gameItem.scss";
import {GameCover} from "../gameCover";
export const GameItem = ({ game }) => {
  return (
    <div className="gameItem">
      <GameCover />
      <div className="gameItemDetails">
        <span className="gameItemTitle"> {game.title}</span>
        <div className="gameItemGenre">{game.genres.map((genre) => genre)}</div>
        <div className="gameItemBtn"> Buy</div>
      </div>
    </div>
  );
};
