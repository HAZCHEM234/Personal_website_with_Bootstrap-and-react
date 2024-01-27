import './App.css';
import Heros from './components/Heros';
import Bio from './components/Bio';
import Quotes from './components/Quotes';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <div>
        <Heros/>
        <Bio/>
        <Quotes/>
        <Work/>
      </div>
    </div>
  );
}

export default App;
