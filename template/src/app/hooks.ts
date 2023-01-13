import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { useEffect, useRef } from 'react';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDimensions = (ref: { current: { offsetWidth: number; offsetHeight: number; }; }) => {
    const dimensions = useRef({ width: 0, height: 0 });
  
    useEffect(() => {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }, [dimensions]);
  
    return dimensions.current;
  };
  