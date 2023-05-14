import {Component} from 'react'
import './index.css'

class AddBook extends Component {
  state = {
    name: '',
    author: '',
  }

  updateTitle = event => {
    this.setState({name: event.target.value})
  }

  updateAuthor = event => {
    this.setState({author: event.target.value})
  }

  formSubmitted = event => {
    event.preventDefault()
    const {name, author} = this.state
    if (name === '') {
      alert('Name cannot be empty')
    } else if (author === '') {
      alert('author cannot be empty')
    } else {
      const newBook = {
        uniqueNo: Math.random().toString(36).substr(2, 9),
        name,
        author,
      }
      const localData = JSON.parse(localStorage.getItem('myData'))
      const updatedLocalData = [...localData, newBook]
      localStorage.setItem('myData', JSON.stringify(updatedLocalData))
      const {history} = this.props
      history.push('/')
    }
  }

  goToHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {title, author} = this.state
    return (
      <form onSubmit={this.formSubmitted} className="form-bg">
        <div className="form-container">
          <h2>Add new Book</h2>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            id="title"
            onChange={this.updateTitle}
            className="input-container"
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            value={author}
            id="author"
            onChange={this.updateAuthor}
            className="input-container"
          />
          <div>
            <button type="submit" className="home-button">
              Add
            </button>
            <button
              type="button"
              className="home-button"
              onClick={this.goToHome}
            >
              Home
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default AddBook
