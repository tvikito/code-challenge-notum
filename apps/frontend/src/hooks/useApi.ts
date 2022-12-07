/* eslint-disable */
import { AppApi } from '@api/apis/AppApi'
import { LoginDto, NodeDto } from '@api/models'
import { Configuration } from '@api/runtime'

/**
 * This configuration is used to initialize AppApi instance.
 */
const config = (accessToken?: string) =>
  new Configuration({
    basePath: 'http://localhost:3002',
    accessToken,
    credentials: 'same-origin',
  })

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

export const useApi = (accessToken?: string) => {
  const Api = new AppApi(config(accessToken))

  const login = async (credentials: LoginDto) => {
    const result = await Api.appControllerLogin({ LoginDto: credentials })
    return result
  }

  const saveNodes = (nodes: NodeDto[]) => async () => {
    const result = await Api.appControllerSaveNodes({ NodesDto: { nodes } })
    return result
  }

  const getMe = async () => await Api.appControllerGetMe({})

  const getNodes = async () => {
    return await Api.appControllerGetNodes()
  }

  return { login, saveNodes, getMe, getNodes, accessToken }
}
