import * as actions from '../../../redux/actions/users'
import * as types from '../../../redux/actionTypes'

describe('requestUsers', () => {
  it('should create an action to request users', () => {
    const expectedAction = {
      type: types.REQUEST_USERS
    }
    expect(actions.requestUsers()).toEqual(expectedAction)
  })
})

describe('requestUsers', () => {
  it('should create an action to request users', () => {
    const expectedAction = {
      type: types.RECEIVE_USERS
    }
    expect(actions.requestUsers(json)).toEqual(expectedAction)
  })
})
