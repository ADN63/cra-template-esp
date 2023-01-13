export interface FeatureData {
    name: string,
    active: boolean,
}

export interface FeatureContextType {
    features: any | undefined,
}

export interface FeatureDisplayType {
    name: string,
    active: boolean,
    displayName: string
}

export interface PropsDisplay {
    feature: FeatureDisplayType,
    index: number
}

export interface PropsFeaturePanel {
    features?: FeatureData[]
}

