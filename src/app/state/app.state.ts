import { ResortState } from "./resort.state";
import { SidenavState } from "./sidenav.state";

export interface AppState {
    sidenav: SidenavState,
    resort: ResortState
  }