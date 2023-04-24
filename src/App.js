import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import MainArea from './Components/MainArea/MainArea';

function App() {
  return (
    <div className="App">
    <Header/>
    <Sidebar/>
    <MainArea/>
    </div>
  );
}

export default App;
