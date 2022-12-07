import { FormEvent } from 'react'

/**
 * sends a request to the specified url from a form. this will change the window location.
 * @param {string} path the path to send the post request to
 * @param {object} params the parameters to add to the url
 * @param {string} [method=post] the method to use on the form
 */

export const submitForm = (path: string, params: { [key: string]: string }) => (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const form = document.createElement('form')
  form.method = 'post'
  form.action = path

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input')
      hiddenField.type = 'hidden'
      hiddenField.name = key
      hiddenField.value = params[key]

      form.appendChild(hiddenField)
    }
  }

  document.body.appendChild(form)
  form.setAttribute('target', '_blank')
  form.submit()
}
