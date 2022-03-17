import Info from './Info'

const Form = ({ name, age, email, handleChange, incrementPage, resetDefaultState }) => {
  return (
  <div>
    <Info
      name={name}
      age={age}
      email={email}
      handleChange={handleChange}
      incrementPage={incrementPage}
      resetDefaultState={resetDefaultState}
    />
  </div>
  )
}

export default Form
