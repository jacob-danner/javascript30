
import './App.css';
import { Quote } from './Quote';
import ye from './ye.jpg'

function App() {
  return (
    <div id='wrapper'>
      <Quote />
      <div id='img-wrapper'>
        <img src={ye}></img>
      </div>
    </div>
  );
}

export default App;
