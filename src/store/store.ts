import { combineReducers, configureStore } from "@reduxjs/toolkit";

// создан корневой reducer,
const rootReducer = combineReducers({});

//конфигурируем redux хранилище
export const setupStor = () => {
  return configureStore({
    //указали корневой reducer
     reducer: rootReducer });
};


//типы с помощью которых взаимодействуем с хранилищем
//получаем тип состояния из reducer и стора
export type RootState = ReturnType<typeof rootReducer>;
//тип самого стора
export type AppStore = ReturnType<typeof setupStor>;
//получим тип диспатча хранилища
export type AppDispatch = AppStore["dispatch"];
