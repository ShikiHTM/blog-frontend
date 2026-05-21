import apiConfig from "@/config/api.config"
import ky from "ky"

export const api = ky.create({
    headers: {
        Accept: "application/json"
    },
    baseUrl: apiConfig.host! + apiConfig.suffix,
    timeout: 10000
})
