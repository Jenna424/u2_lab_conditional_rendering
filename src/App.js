import './styles/App.css'
import { useState } from 'react'
import LandingPage from './components/LandingPage'
import Form from './components/Form'
import Thanks from './components/Thanks'
import ErrorPage from './components/ErrorPage'

const App = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [formValues, setFormValues] = useState({ name: '', age: '', email: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    // Uses bracket notation to access a key in state that is a match to the input's name and set's it to the inputs value
  }

  const incrementPage = () => {
    setCurrentPage((prevState) => prevState + 1)
  }

  const resetDefaultState = () => {
    setCurrentPage(0)
    setFormValues({ name: '', age: '', email: '' })
  }

  const getPage = () => {
    let page
    if (currentPage === 0) {
      page = <LandingPage incrementPage={incrementPage} />
    } else if (currentPage === 1) {
      page = (
        <Form
          name={formValues.name}
          age={formValues.age}
          email={formValues.email}
          handleChange={handleChange}
          incrementPage={incrementPage}
          resetDefaultState={resetDefaultState}
        />
      )
    } else if (currentPage === 2) {
      page =
        parseInt(formValues.age) > 18 ? (
          <Thanks resetDefaultState={resetDefaultState} />
        ) : (
          <ErrorPage resetDefaultState={resetDefaultState} />
        )
    }
    return page
  }

  return <div className="App">{getPage()}</div>
}

export default App
