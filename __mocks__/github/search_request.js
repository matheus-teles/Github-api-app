import { GITHUB_SEARCH_USER_RESPONSE } from './search_response'

export default function requestUserSearch(error = false) {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      error ?
        reject() :
        resolve(GITHUB_SEARCH_USER_RESPONSE)
    )
  })
}
