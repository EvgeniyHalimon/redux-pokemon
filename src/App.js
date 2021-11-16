import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonForm from './components/PokemonForm';
import PokemonCard from './components/PokemonCard';

function App() {
  return (
    <div className="App">
      <PokemonForm/>
      <PokemonCard/>
    </div>
  );
}

export default App;
