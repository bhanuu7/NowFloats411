import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import AddBook from './components/AddBook'
import BookDetails from './components/BookDetails'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/BookDetails/:uniqueNo" component={BookDetails} />
    <Route exact path="/AddBook/" component={AddBook} />
  </Switch>
)
export default App
