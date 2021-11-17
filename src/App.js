import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonForm from './components/PokemonForm';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <PokemonForm/>
      <List/>
    </div>
  );
}

export default App;
