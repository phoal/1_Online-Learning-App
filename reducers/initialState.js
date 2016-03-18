import Immutable from 'immutable'
import {dispatch} from 'react-redux'
import {toggle} from '../actions'
import NavButton from '../components/NavButton'
import Share from '../components/Share'
import SignIn from '../components/SignIn'
import { store } from '../public/index'
// level counters
var i = 10000;
var j = 0;
// List of NavLeft ListItems
export const navLeft = Immutable.List.of(
  Immutable.Map({hrefA: "#", title: "Home", classI: "fa fa-home", classLi: "active"}),
  Immutable.List.of(
    Immutable.Map({hrefA: "#", title: "Algebra 1"}),
    Immutable.Map({hrefA: "#", title: "Algebra 1.1"}),
    Immutable.Map({hrefA: "#", title: "Algebra 1.2"})
  ),
  Immutable.List.of(
    Immutable.Map({hrefA: "#", title: "Algebra 2"}),
    Immutable.Map({hrefA: "#", title: "Algebra 2.1"}),
    Immutable.Map({hrefA: "#", title: "Algebra 2.2"})
  )
)
// Set the level for each ListItem and apply a default hrefA: "#"
const convert = (item) => {
  if (Immutable.Map.isMap(item)) return Immutable.Map({hrefA: "#", level: j + i++}).merge(item)
  else if (Immutable.List.isList(item)) {
    j = j + 1000
    return item.map(convert)
  } else return item
}
//export let navLeft = sourceLeft.map(convert)

const navToggle = (index) =>
  (e) => { store.dispatch(toggle(index)) }

const share = Immutable.List.of(
  Immutable.Map({classA: "btn", hrefA: "#", classI: "fa fa-share-alt", ariaA: "Share"}),
  Immutable.Map({classA: "btn", hrefA: "#", desc: "Share on Twitter ", classI: "fa fa-twitter", ariaA: "twitter"}),
  Immutable.Map({classA: "btn", hrefA: "#", desc: "Share on Google+ ", classI: "fa fa-google-plus", ariaA: "google plus"}),
  Immutable.Map({classA: "btn", hrefA: "#", desc: "Share on Facebook ", classI: "fa fa-facebook", ariaA: "facebook"}),
  Immutable.Map({classA: "btn", hrefA: "#", desc: "Share on Weibo ", classI: "fa fa-weibo", ariaA: "weibo"}),
  Immutable.Map({classA: "btn", hrefA: "#", desc: "Share on instagram ", classI: "fa fa-instagram", ariaA: "instagram"})
)
const signIn = Immutable.Map({
  type: SignIn.type,
  dropState: false,
  buttonSI: Immutable.Map({classA: "btn pull-right", hrefA: "#", classI: "fa fa-sign-in", ariaA: "Sign In"}),
  buttonX: Immutable.Map({classA: "btn pull-right", hrefA: "#", classI: "fa fa-times-circle", ariaA: "Cancel"}),
  buttonSubmit: Immutable.Map({classA: "btn pull-right", hrefA: "#", classI: "fa fa-sign-in", ariaA: "Submit"}),
  inputUser: Immutable.Map({label: "User Name", name: 'user', type: 'text'}),
  inputPW: Immutable.Map({label: "Password", name: 'Password', type: 'password'})
})
export let navTop = Immutable.List.of(
  Immutable.Map({type: NavButton.type, onClickA: navToggle(0), classA: "btn pull-left", hrefA: "#", classI: "fa fa-align-justify", ariaA: "Open Menu"}),
  Immutable.Map({type: NavButton.type, classA: "btn pull-left", hrefA: "#", classI: "fa fa-home", ariaA: "Home"}),
  Immutable.Map({type: Share.type, dropState: false, list: share}),
  Immutable.Map({type: NavButton.type, classA: "btn pull-right", hrefA: "#", classI: "fa fa-user", ariaA: "User"}),
  signIn,
  Immutable.Map({type: NavButton.type, hrefA: "https://github.com/rackt/redux/", classA: "btn pull-right", classI: "fa fa-github", ariaA: "Source Code"})
)
