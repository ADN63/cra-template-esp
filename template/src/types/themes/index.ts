export interface ThemeData {
    isDarkMode?:boolean,
    isMobile?: Boolean,
    bg: string,
    bgInverted:string,
    textColor: string,
    textSize: string,
    windowWidth : number,
    windowHeight: number,
    radialStyle: string,
    menuOpen:boolean,
    togglerDarkModeEnable:boolean,
    mainDiv: "w-screen h-screen flex items-center justify-center"
}

export interface ThemeContextType {
    theme: any
}