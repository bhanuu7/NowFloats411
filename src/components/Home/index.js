import {Component} from 'react'
import Books from '../Books'
import book from '../../books.json'
import './index.css'

localStorage.setItem('myData', JSON.stringify(book.Books))

class Home extends Component {
  state = {
    searchInput: '',
    data: JSON.parse(localStorage.getItem('myData') || '[]'),
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = uniqueNo => {
    const {data} = this.state
    const filteredUsersData = data.filter(each => each.uniqueNo !== uniqueNo)
    this.setState({
      data: filteredUsersData,
    })
  }

  addABook = () => {
    const {history} = this.props
    history.push('/AddBook')
  }

  render() {
    const {searchInput, data} = this.state
    const filteredData = data.filter(
      eachBook =>
        eachBook.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        eachBook.author.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(filteredData)

    return (
      <div className="app-container">
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          placeholder="Search with book or author name"
          value={searchInput}
          className="search-container"
        />
        <h1 className="title">Available Books</h1>
        <ul className="list-container">
          {filteredData.map(eachUser => (
            <Books
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
        <button type="button" className="home-button" onClick={this.addABook}>
          Add a Book
        </button>
      </div>
    )
  }
}

export default Home
