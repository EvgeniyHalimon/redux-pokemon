import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonForm from './components/PokemonForm';
import PokemonCard from './components/PokemonCard';
import PokemonsList from './components/PokemonsList';

function App() {
  return (
    <div className="App">
      <PokemonForm/>
      <PokemonCard/>
      <PokemonsList/>
    </div>
  );
}

export default App;
