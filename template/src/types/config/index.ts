import { AuthData } from "../auth"
import { FeatureData } from "../features"
import { OtaData } from "../ota"
import { WiFiData } from "../wifi"
import { NetWorkData } from "../network"

export type ConfigResponse = {
    features: FeatureData[],
    auth: AuthData[],
    wifi: WiFiData[],
    ota: OtaData,
    networks: NetWorkData[]
}

export interface ConfigContextType {
    config: any,
}