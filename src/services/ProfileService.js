import { AppState } from "../AppState"
import { logger } from "../utils/Logger"



class ProfileService {
    async editAccount(input) {
        logger.log("account is....", AppState.account)
        AppState.account.bio = input
    }
}

export const profileService = new ProfileService()