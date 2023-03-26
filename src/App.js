//import logo from './logo.svg';
import './App.css';

function MagicButton()
{
  return (
    <>
      <h3>This is a magic button</h3>
      <button>Magic</button>
    </>
  );
}

function MagicArticle()
{
  return (
    <article>
      <h2>This is an article in a component</h2>
      <p>I can put various stuff in here under the parent</p>
      <button>I can even be here!</button>
    </article>
  )
}

const squares = 
[
  {id: 1, name: 'Duck', active: true},
  {id: 2, name: 'Duck', active: true},
  {id: 3, name: 'Duck', active: true},
  {id: 4, name: 'Duck', active: true},
  {id: 5, name: 'Duck', active: true},
  {id: 6, name: 'Goose', active: false},
  {id: 7, name: 'Duck', active: true},
  {id: 8, name: 'Duck', active: true},
  {id: 9, name: 'Duck', active: true},
]

function DuckDuckGoose()
{
  const listBirds = squares.map(bird =>
    <li
    key = {bird.id} 
    style = {{fontSize: bird.active? 20 : 30}}
    >
      {bird.name}
    </li>
  );
  return (
    <ol>{listBirds}</ol>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MagicButton />
      <MagicArticle />
      <DuckDuckGoose />
      </header>
    </div>
  );
}

export default App;
