import {Resort} from './resort.model';

export interface ResortState{
    error:Error|null;
    loading:boolean;
    resorts:Resort[];
}
