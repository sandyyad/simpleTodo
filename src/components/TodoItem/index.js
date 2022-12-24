// Write your code here
import './index.css'

const TodoItem = props => {
  const {userDetails} = props
  const {title} = userDetails

  return (
    <div className="Todo">
      <p className="para">{title}</p>
      <button type="button" className="button">
        Delete
      </button>
    </div>
  )
}

export default TodoItem
