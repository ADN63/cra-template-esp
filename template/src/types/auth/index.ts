export interface AuthData {
    username: string,
    password: string,
}

export type AuthResponse = {
    type?: 'badUser' | `badPassword`
    username?: string
}

export interface AuthContextType {
    auth: any
}

export interface PropsPanelAuth {
    auth? : AuthData[]
}