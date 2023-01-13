import { AXIOS } from "src/api/baseApi"
import { ConfigResponse } from "src/types/config"

export const getConfigAsync= async () => {
    const result = await AXIOS.get<ConfigResponse>('config')
    return result.data
}
