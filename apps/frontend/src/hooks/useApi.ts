/* eslint-disable */
import { AppApi } from '@api/apis/AppApi'
import { LoginDto } from '@api/models'
import { Configuration } from '@api/runtime'

/**
 * This configuration is used to initialize AppApi instance.
 */
const config = (accessToken?: string) =>
  new Configuration({
    basePath: 'http://localhost:3002',
    accessToken,
    credentials: 'same-origin',
    headers: accessToken
      ? {
          Authorization: 'Bearer ' + accessToken,
        }
      : {},
  })

let Api = new AppApi(config())

export const setNewApiConfig = (accessToken: string) => (Api = new AppApi(config(accessToken)))

export const login = (credentials: LoginDto) => async () => {
  const result = await Api.appControllerLogin({ LoginDto: credentials })
  setNewApiConfig(result.access_token)
  return result
}

export const getMe = async () => await Api.appControllerGetMe()

export const getNodes = async () => await Api.appControllerGetNodes()

/**
 * Try to use https://tanstack.com/query/v4 to fetch data from API.
 * Create your custom hooks here and use them in components.
 * Typescript types and api call are generated in `api/` folder.
 */

export enum Queries {
  // fetch nodes from API (function AppApi.appControllerGetNodes())
  'nodes' = 'nodes',
  // fetch user from API (function AppApi.appControllerGetMe())
  'me' = 'me',
}

export enum Mutations {
  // login to API (AppApi.appControllerLogin())
  'login' = 'login',
  // save nodes to API (AppApi.appControllerSaveNodes())
  'saveNodes' = 'saveNodes',
}
