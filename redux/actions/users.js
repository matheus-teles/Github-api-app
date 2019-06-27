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


export function fetchUsers() {
  return (dispatch, getState) => {
    const users = getState().users.items;
    const lastSeenId = users.length ? users[users.length - 1].id : 0
    dispatch(requestUsers())
    return fetch(`https://api.github.com/users?since=${lastSeenId}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(json)))
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
