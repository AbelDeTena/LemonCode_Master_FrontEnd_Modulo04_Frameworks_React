import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  detail: string;
  characters: string;  
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list/",
  detail: "/detail/:id",
  characters: "/characters",
  
};

interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (id: string) => string;
  
}

export const routes: Routes = {
  ...switchRoutes,
  detail: (id) => generatePath(switchRoutes.detail, { id })  
};
