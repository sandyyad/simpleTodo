// Write your code here
import './index.css'

const TodoItem = props => {
  const {userDetails} = props
  const {title} = userDetails

  return (
    <li className="Todo">
      <p className="para">{title}</p>
      <button type="button" className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
