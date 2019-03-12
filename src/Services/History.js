import { createBrowserHistory } from 'history'
import AppConfig from 'Config/AppConfig'

export default createBrowserHistory({
  basename: AppConfig.deployPath
})