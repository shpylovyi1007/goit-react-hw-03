import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import { useState, useEffect } from 'react'

function App() {


const [users, setUsers] = useState(() => {
  const savedUsers = localStorage.getItem('users');
  return savedUsers ? JSON.parse(savedUsers) : [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];
});

useEffect(() => {
  localStorage.setItem('users', JSON.stringify(users));
}, [users]);

const addUser = (newUser) => {
  setUsers((prevUsers) => [...prevUsers, newUser]);
};

const [filter, setFilter] = useState('')

const visibleUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))

const deleteUser = (userId) => {
  setUsers((prevUsers) => {
    return prevUsers.filter(user => user.id !== userId)
  })
}
 

  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addUser}/>
  <SearchBox value={filter} onFilter={setFilter} />
  <ContactList users={visibleUsers} onDelete={deleteUser}/>
</div>

  )
}

export default App
