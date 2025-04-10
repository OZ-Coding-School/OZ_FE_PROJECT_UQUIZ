import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { RouteConfig } from "./routes";
import { RankContextProvider } from "./contexts/RankContext";

function App() {
  return (
    <Router>
      <RankContextProvider>
        <Routes>
          {RouteConfig.map(({ ...rest }) => (
            <Route {...rest} />
          ))}
        </Routes>
      </RankContextProvider>
    </Router>
  );
}

export default App;
