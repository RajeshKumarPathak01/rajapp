import logo from './logo.svg';
import './App.css';
import Registeration from './component/form/Registeration';
import Demo from './component/form/Hooks/Demo';


function App() {
  return (
    <div id='root' style={{color:"white",backgroundColor:"purple"}}>

      <Registeration name="rajesh" />
      {/* <Demo name="React😊💕"/> */}
    </div>
  );
}

export default App;
