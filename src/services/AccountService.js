import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
  async editAccount(update) {
    const res = await api.put("/account", update)
    AppState.account = res.data
    AppState.profile = res.data
    Pop.toast("Account was Edited")
  }

  async setGraduated() {
    if (AppState.account.graduated == true) {
      AppState.account.graduated = false
    } else {
      AppState.account.graduated = true
    }
    // logger.log("Changed", AppState.account.graduated)
    AppState.account = AppState.account
  }
}

export const accountService = new AccountService()
