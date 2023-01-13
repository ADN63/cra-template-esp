import { AuthData } from "./auth"
import { FeatureData } from "./features"

export type MyServerResponse = {
    type: 'feature' | 'auth' | 'errorUnknow' | 'badUser' | 'badPassword' | 'errorFeature' | 'noAuth' | 'unitialized'
    value?: AuthData | FeatureData[]
}

export interface MyRoute {
    path: string,
    element: JSX.Element
    displayName: string,
    callback?: () => void

}


export const ft_authStrict = "ft_authStrict";
export const ft_fileUpload = "ft_fileUpload";
export const ft_ota = "ft_ota";
export const ft_cors = "ft_cors";

export const cors_description = "la vérification strict du protocol CORS";
export const ota_description = "la mise a jour a distance";
export const fileUpload_description = "le transfert de fichiers";
export const authStrict_description = "la page d 'Authentification";