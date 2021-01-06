import {Menu} from "semantic-ui-react"
import {Link} from "react-router-dom"

export default () => {
  return (
    <Menu>
      <Link to="/">
        <Menu.Item name='Home'/>
      </Link>
      <Link to="/jeopardy">
        <Menu.Item name='Jeopardy'/>
      </Link>
  </Menu>
  )

}