import { REQUEST_USERS, RECEIVE_USERS } from '../actionTypes'

export function requestUsers() {
  return {
    type: REQUEST_USERS
  }
}

export function receiveUsers(json) {
  return {
    type: RECEIVE_USERS,
    users: json.map((user) => { return { ...user, id: user.id.toString() } })
  }
}

export function searchUsers(query) {
  return dispatch => {
    dispatch(requestUsers())
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(json.items)))
  }
}
