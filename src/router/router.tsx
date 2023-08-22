import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { switchRoutes } from "./routes";
import {
  ListScene,
  CharactersScene,
  DetailScene, 
} from "../scenes/index";

export function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={switchRoutes.root}
            element={<Navigate to={switchRoutes.list} />}
          />
          <Route path={switchRoutes.list} element={<ListScene />} />
          <Route path={switchRoutes.detail} element={<DetailScene />} />
          <Route path={switchRoutes.characters} element={<CharactersScene />} />          
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
