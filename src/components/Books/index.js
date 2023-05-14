import {Link} from 'react-router-dom'
import {AiFillDelete} from 'react-icons/ai'
import './index.css'

const Books = props => {
  const {userDetails, deleteUser} = props
  const {name, author, uniqueNo} = userDetails
  const onDelete = () => {
    deleteUser(uniqueNo)
  }
  return (
    <li className="book-container">
      <div className="book-details">
        <Link to={`/BookDetails/${uniqueNo}`}>
          <h2 className="book-name">{name} </h2>
        </Link>
        <p className="author">Author: {author} </p>
      </div>

      <AiFillDelete onClick={onDelete} className="icon" />
    </li>
  )
}

export default Books
