import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { GetConfigAsync, selectConfig } from './configSlice';


export const useConfig = () => {
    const config = useAppSelector(selectConfig)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (config.status === 'idle') { dispatch(GetConfigAsync()) }
    })

    return React.useMemo(() => ({ config }), [config])
}
