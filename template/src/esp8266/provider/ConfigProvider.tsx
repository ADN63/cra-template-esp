import React, { createContext } from "react";
import Cerror from "src/components/error/Cerror";
import Spinner from "src/components/spinner/Spinner";
import { useConfig } from "../slice/config/configHooks";
import { ConfigContextType } from "src/types/config";

const ConfigContext = createContext<ConfigContextType>(null!)

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
    const { value,status } = useConfig().config
    const [loading, Loaded] = React.useState(false)
    React.useLayoutEffect(() => {
      const timeout = setTimeout(() => {
        Loaded(true);
      }, 1250)
  
      return () => clearTimeout(timeout)
    })
  
    const Element = !loading ? (<Spinner fixed children={<>{status}</>}/>) : status === 'failed' ? (<Cerror message="Carte Non Disponible"/>) : status === 'success' ? (<>{children}</>) : null
    return (
      <ConfigContext.Provider value={{ config: value }}><>{Element}</></ConfigContext.Provider>
    )
  }
  