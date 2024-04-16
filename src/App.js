
import './App.css';
import ImageComponent from './components/button/image';
import ButtonComponent from './components/image/button';
import Listitems from './components/props/propimages';
import ListImages from './components/props/props';

function App() {
  return (
    <div className="App">
      <ImageComponent></ImageComponent>
      <ButtonComponent></ButtonComponent>
      <ListImages></ListImages>
      <Listitems></Listitems>
    </div>
  );
}

export default App;
