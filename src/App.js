import './App.css';
import Sidebar from './components/Sidebar';

import YTSidebar from './components/YTSidebar';


function App() {

  return (
    <div className="flex">
      <Sidebar/>
      <YTSidebar/>
    </div>
  );
}

export default App;
