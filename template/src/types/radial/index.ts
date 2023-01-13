export interface RadialPropItem {
    icon: JSX.Element,
    path?: string,
}

export interface PropsRadial {
    length: number,
    center?: JSX.Element,
    items: RadialPropItem[],
    primary: string,
    secondary: string,
    isMenu:boolean
}

export const variants = {
    open: {
        scale: [0, 0.5, 0.75, 0.95, 1],
        transition: {
            duration: .3,
            type: "spring",
            damping: 10,
            stiffness: 400
        }
    },
    closed: {
        scale: [1, 0.95, 0.75, 0.5, 0],
        rotate: [360, 180, 135, 90, 45],
        borderRadius: ["20%", "20%", "50%", "50%", "0%"],
        transition: { duration: .3 }
    }
}