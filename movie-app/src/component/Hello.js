import "./App.css";

import Hello from "./component/Hello";

function App(props) {
  const { name } = props;

  return (
    <div>
      <h2>This is Creat React App</h2>
      <p> Saya { name } Frontend Engineer</p>
      <Hello name= "Salman Alfarisi" />
    </div>
  )

}

export default App;
