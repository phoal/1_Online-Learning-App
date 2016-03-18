import Immutable from 'immutable'
import {navLeft, navTop} from './initialState'
import {TOGGLE} from '../actions'

// applied class Names
const EXPANDED = 'expanded'
const DONE = 'done'
const ACTIVE = 'active'
const COLLAPSED = ''

const initialState = {
  shownNodes: Immutable.List(),
  showLeft: COLLAPSED,
  navLeft: navLeft,
  navTop: navTop
}

export default function base(state = initialState, action) {
  switch (action.type) {
    case TOGGLE: {
      const index = state.shownNodes.indexOf(action.payload)
      if (action.payload === 0)  {
        if (index > -1) {
          const newList = state.shownNodes.delete(index)
          const newButton = state.navTop.get(0).set('classI', "fa fa-align-justify")
          const newTop = state.navTop.set(0, newButton)
          return Object.assign({}, {showLeft: COLLAPSED, shownNodes: newList, navLeft: state.navLeft, navTop: newTop})
        }
        else {
          const newList = state.shownNodes.push(action.payload)
          const newButton = state.navTop.get(0).set('classI', "fa fa-long-arrow-left")
          const newTop = state.navTop.set(0, newButton)
          return Object.assign({}, {showLeft: EXPANDED, shownNodes: newList, navLeft: state.navLeft, navTop: newTop})
        }
      } else if (index > -1) {
          const newList = state.shownNodes.delete(index)
          const newDrop = state.navTop.get(action.payload).set('dropState', false)
          const newTop = state.navTop.set(action.payload, newDrop)
          return Object.assign({}, {shownNodes: newList, showLeft: state.showLeft, navLeft: state.navLeft, navTop: newTop})
      } else {
          const newList = state.shownNodes.push(action.payload)
          const newDrop = state.navTop.get(action.payload).set('dropState', true)
          const newTop = state.navTop.set(action.payload, newDrop)
          return Object.assign({}, {shownNodes: newList, showLeft: state.showLeft, navLeft: state.navLeft, navTop: newTop})
      }
    }
    default: return state
  }
}
