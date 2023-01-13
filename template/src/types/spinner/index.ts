import { RadialPropItem } from "../radial";

export interface PropsSpinner {
    items?: RadialPropItem[],
    className?: string,
    children?:React.ReactNode, fixed?:boolean
}
