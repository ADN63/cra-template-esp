export interface OtaData {
    hostname: string,
    password: string,
    port: number
}

export interface PropsPanelOta 
{
    ota: OtaData | undefined
}