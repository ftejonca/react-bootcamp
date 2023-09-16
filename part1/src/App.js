import './App.css';
import Message from './Message.js'

const Mensaje = () => {
  return <h1>Hello World!!!</h1>
}

const Description = () => {
  return <p>This is an app from the react Bootcamp session</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje/>
      <Message color = 'blue' msg = 'We are using an outside component'/>
      <Description/>
    </div>
  );
}

export default App;
