/* tslint:disable */
/* eslint-disable */
/**
 * Notum nodes
 * 🚀🌙
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface LoginDto
 */
export interface LoginDto {
  /**
   *
   * @type {string}
   * @memberof LoginDto
   */
  username: string
  /**
   *
   * @type {string}
   * @memberof LoginDto
   */
  password: string
}

/**
 * Check if a given object implements the LoginDto interface.
 */
export function instanceOfLoginDto(value: object): boolean {
  let isInstance = true
  isInstance = isInstance && 'username' in value
  isInstance = isInstance && 'password' in value

  return isInstance
}

export function LoginDtoFromJSON(json: any): LoginDto {
  return LoginDtoFromJSONTyped(json, false)
}

export function LoginDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginDto {
  if (json === undefined || json === null) {
    return json
  }
  return {
    username: json['username'],
    password: json['password'],
  }
}

export function LoginDtoToJSON(value?: LoginDto | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    username: value.username,
    password: value.password,
  }
}
