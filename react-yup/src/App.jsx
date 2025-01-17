import './App.css'
import FormWithYup from './components/form-with-yup'
import FormWithoutYup from './components/form-without-yup'

function App() {

  return (
    <>
      <h1>React Form Validation with YUP</h1>
      {/* <FormWithoutYup /> */}
      <FormWithYup />
    </>
  )
}

export default App
