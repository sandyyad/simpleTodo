import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {isSearch: '', userDetails: initialTodosList}

  onChangeSearch = event => {
    this.setState({isSearch: event.target.value})
  }

  deleteUser = id => {
    const {userDetails} = this.state
    const filterUserData = userDetails.filter(each => each.id !== id)
    this.setState({userDetails: filterUserData})
  }

  render() {
    const {isSearch, userDetails} = this.state

    const searchResults = userDetails.filter(eachUser =>
      eachUser.name.includes(isSearch),
    )

    return (
      <div className="main-div">
        <div className="sub-div">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {searchResults.map(eachItem => (
              <TodoItem userDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

// Write your code here

export default SimpleTodos
