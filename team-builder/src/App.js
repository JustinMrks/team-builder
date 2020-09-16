import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

const initialValues = {
  name: '',
  email: '',
  role: '',
}

const starterTeam = [
  {
    name: 'John',
    email: 'JohnyBoy1',
    role: 'tl',
  },
  {
    name: 'Daniel',
    email: 'Dannie34',
    role: 'student',
  }
]

const onChange = () => {

} 

const onSubmit = () => {

} 

function App() {
  const [formValues, setFormValues] = useState([])

  useEffect(() => {
    setFormValues(initialValues)
  }, [])


  return (
    <div className="App">
      <header>  
      </header>
      <Form values={formValues} onChange={onChange} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
