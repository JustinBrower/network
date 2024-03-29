import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"



class BillboardsService {

    async getBillboards() {
        const res = await api.get('api/ads')
        AppState.billboards = res.data
        logger.log("Ads are...", AppState.billboards)
    }
}

export const billboardsService = new BillboardsService()