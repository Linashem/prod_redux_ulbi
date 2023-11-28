import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux";

//хуки для работы с redux

//для использования типизированного dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

//типизированный useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
