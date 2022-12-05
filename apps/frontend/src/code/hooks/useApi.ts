/* eslint-disable */
import { AppApi, Configuration } from '../../api'

/**
 * This configuration is used to initialize AppApi instance.
 */
const config = () => {
  return new Configuration({
    basePath: 'http://localhost:3002',
    // set more stuff, eg accessToken here
  })
}

enum Queries {
  // fetch nodes from API (function AppApi.appControllerGetNodes())
  'nodes' = 'nodes',
  // fetch user from API (function AppApi.appControllerGetMe())
  'me' = 'me',
}

enum Mutations {
  // login to API (AppApi.appControllerLogin())
  'login' = 'login',
  // save nodes to API (AppApi.appControllerSaveNodes())
  'saveNodes' = 'saveNodes',
}
