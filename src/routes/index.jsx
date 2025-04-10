import { Home, NotFound, Quiz, Results } from "../pages";

export const RouteConfig = [
  { path: "/", element: <Home /> },
  { path: "/quiz/:nickname", element: <Quiz /> },
  { path: "/results/:nickname", element: <Results /> },
  { path: "*", element: <NotFound /> },
];

export const RouteName = {
  home: "/",
  quiz(nickname) {
    return `/quiz/${nickname}`;
  },
  results(nickname) {
    return `/results/${nickname}`;
  },
};
