import { configureStore } from "@reduxjs/toolkit";
import { Store } from 'redux';
import { persistStore, persistReducer } from "redux-persist";


import storage from 'redux-persist/lib/storage';

export interface RootState {
  ingredients: {
    baking: { name: string, id: string }[],
    fruits: { name: string, id: string }[],
    vegetables: { name: string, id: string }[],
    dairies: { name: string, id: string }[],
    meatSub: { name: string, id: string }[],
    meats: { name: string, id: string }[],
    poultry: { name: string, id: string }[],
    fish: { name: string, id: string }[],
    shellfish: { name: string, id: string }[],
    herbs: { name: string, id: string }[],
    grains: { name: string, id: string }[],
    beans: { name: string, id: string }[],
    noodles: { name: string, id: string }[],
    oils: { name: string, id: string }[],
    breads: { name: string, id: string }[]
  }
}

export interface IngredientAction {
  type: "ADD_INGREDIENT" | "REMOVE_INGREDIENT";
  category: keyof RootState["ingredients"];
  payload: any;
}

const initialState: RootState = {
  ingredients: {
    baking: [],
    fruits: [],
    vegetables: [],
    dairies: [],
    meatSub: [],
    meats: [],
    poultry: [],
    fish: [],
    shellfish: [],
    herbs: [],
    grains: [],
    beans: [],
    noodles: [],
    oils: [],
    breads: []
  }
};

export const ingredientActions = {
  add: (state: RootState, action: { category: keyof RootState["ingredients"], payload: any }) => {
    state.ingredients[action.category].push(action.payload);
  },
  remove: (state: RootState, action: { category: keyof RootState["ingredients"], payload: any }) => {
    state.ingredients[action.category] = state.ingredients[action.category].filter(
      ingredient => ingredient !== action.payload
    );
  }
};

export type Action = {
  type: string;
  category?: keyof RootState["ingredients"];
  payload?: any;
};


const reducer = (state = initialState, action: IngredientAction) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.category]: [...state.ingredients[action.category], action.payload]
        }
      };
    case "REMOVE_INGREDIENT":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.category]: state.ingredients[action.category].filter(
            ingredient => ingredient.id !== action.payload
          )
        }
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);


const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);


export default store 
