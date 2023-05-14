import {withRouter} from 'react-router-dom'
import './index.css'
import book from '../../books.json'

const BookDetails = props => {
  const {match} = props
  const {params} = match
  const {uniqueNo} = params
  const id = parseInt(uniqueNo)
  const BookData = book.Books.filter(each => each.uniqueNo === id)
  const {name, author, coverPageUrl, description} = BookData[0]

  const goToHome = () => {
    const {history} = props
    history.push('/')
  }

  return (
    <div
      className="book-details-bg"
      style={{
        backgroundImage: `url(${coverPageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
      }}
    >
      <div className="details-container">
        <h1>{name}</h1>
        <h3>by {author}</h3>
        <p>{description}</p>
        <button className="home-button" type="button" onClick={goToHome}>
          Home
        </button>
      </div>
    </div>
  )
}

export default withRouter(BookDetails)
