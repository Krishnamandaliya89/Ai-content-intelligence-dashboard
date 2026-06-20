// src/hooks/use-app-dispatch.ts

import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
