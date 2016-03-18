
export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

export const TOGGLE = 'TOGGLE'

// Toggles NAV_LEFT
export function toggle(index) {
  return {
    type: TOGGLE,
    payload: index
  }
}
