import './App.scss';
import { Board } from './components/Board';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Sidebar />
        <Board />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
