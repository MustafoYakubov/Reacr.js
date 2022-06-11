import "./gameItem.scss";
import { GameCover } from "../gameCover";
import { GameBuy } from "../gameBuy/GameBuy";
export const GameItem = ({ game }) => {
  return (
    <div className="gameItem">
      <GameCover image={game.image} />
      <div className="gameItemDetails">
        <span className="gameItemTitle"> {game.title}</span>
        <div className="gameItemGenre">{game.genres.map((genre) => genre)}</div>
        <div className="gameItemBtn">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};
