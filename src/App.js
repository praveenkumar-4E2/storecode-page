
import './App.css';
import RouterPage from './Pages/RouterPage';
import BottomNav from './components/common/BottomNav/BottomNav';
import TopNav from './components/common/TopNav/TopNav';


function App() {
  return (
    <div className="App">
      <TopNav />
      <RouterPage/>
      <BottomNav/>
     
    </div>
  );
}

export default App;
