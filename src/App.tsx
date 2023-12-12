import { BrowserRouter, Routes, Route } from "react-router-dom";
import Memory from "./pages/Memory";
import GuessTheColor from "./pages/GuessTheColor";
import TicTacToe from "./pages/TicTacToe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/memory" element={<Memory />} />
        <Route path="/guessthecolor" element={<GuessTheColor />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
