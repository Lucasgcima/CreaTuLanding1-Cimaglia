import './App.css'
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx'
import ReservaForm from './components/ReservaForm.jsx'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Hotel Bariloche" />
      <ReservaForm />
    </div>
  )
}

export default App
