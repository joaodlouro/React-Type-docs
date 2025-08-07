import { Item } from "@/types/Item"

type AddAction = { 
  type: 'add';
  payload: string;
}

type EditTextAction ={
  type: 'editText'
  payload: {
    id: number;
    newText: string;
  }
}

type ToggleDoneAction ={
  type: 'toggleDone';
  payload: number;
}

type removeAction = {
  type: 'remove';
  payload: number;
}

type ListActions = AddAction | EditTextAction | ToggleDoneAction | removeAction ;

export const listReducer = (list: Item[], action: ListActions ) =>{

  return list;
}