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

function App() {
  const [formValues, setFormValues] = useState([])
  const [teamList, setTeamList] = useState(starterTeam)

  const change = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]:inputValue })
  } 
  
  const submit = () => {

    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newMember.name || !newMember.email || !newMember.role) {
      return
    }

    setTeamList(teamList.concat(newMember))

    setFormValues(initialValues)
  } 

  useEffect(() => {
    setFormValues(initialValues)
  }, [])


  return (
    <div className="App">
      <header>  
      </header>
      <Form values={formValues} change={change} submit={submit} />
    </div>
  );
}

export default App;
