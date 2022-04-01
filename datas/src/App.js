import React, { useEffect, useReducer } from "react";
import Drawer from "./components/Drawer";
import { KEY } from "./CONSTANTS/KEY";

const initialData = {
  films: [],
  loading: false,
  errMessage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHING": {
      return { films: action.val };
    }
    default:
      return state;
  }
};
function App() {
  useEffect(() => {
    fetchFilms();
  }, []);

  const [resData, dispatch] = useReducer(reducer, initialData);
  async function fetchFilms() {
    try {
      const res = await fetch(
        "https://data-imdb1.p.rapidapi.com/titles?info=mini_info&limit=10&page=1&titleType=movie&genre=Action&year=2022",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
            "x-rapidapi-key": KEY,
          },
        }
      );
      if (!res.ok) {
        throw new Error("WRONG SINTACTIS" + res.status);
      }
      const data = await res.json();
      console.log(data);
      dispatch({ type: "FETCHING", val: data });
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="App">
      <Drawer resData={resData} />
    </div>
  );
}
export default App;
