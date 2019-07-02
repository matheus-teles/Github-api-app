import * as actions from '../../../redux/actions/users'
import * as types from '../../../redux/actionTypes'
import { GITHUB_SEARCH_USER_RESPONSE } from '../../../__mocks__/github/search_response'

describe('requestUsers', () => {
  it('should create an action to request users', () => {
    const expectedAction = {
      type: types.REQUEST_USERS
    }
    expect(actions.requestUsers()).toEqual(expectedAction)
  })
})

describe('receiveUsers', () => {
  it('should create an action to receive users', () => {

    const expectedUsers = [
        {
          "login": "mojombo",
          "id": "1",
          "node_id": "MDQ6VXNlcjE=",
          "avatar_url": "https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
          "gravatar_id": "",
          "url": "https://api.github.com/users/mojombo",
          "html_url": "https://github.com/mojombo",
          "followers_url": "https://api.github.com/users/mojombo/followers",
          "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
          "organizations_url": "https://api.github.com/users/mojombo/orgs",
          "repos_url": "https://api.github.com/users/mojombo/repos",
          "received_events_url": "https://api.github.com/users/mojombo/received_events",
          "type": "User",
          "score": 105.47857
        }
      ]

    const expectedAction = {
      type: types.RECEIVE_USERS,
      users: expectedUsers
    }

    expect(actions.receiveUsers(GITHUB_SEARCH_USER_RESPONSE.items)).toEqual(expectedAction)
  })
})

describe('invalidateUsers', () => {
  it('should create an action to request users', () => {
    const expectedAction = {
      type: types.INVALIDATE_USERS
    }
    expect(actions.invalidateUsers()).toEqual(expectedAction)
  })
})
