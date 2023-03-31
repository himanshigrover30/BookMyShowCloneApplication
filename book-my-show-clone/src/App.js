import './App.css';
import {Routes, Route} from "react-router-dom"

// React slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' />
        <Route path='/movie:id' />
        <Route path='/plays' />
      </Routes>
    </div>
  );
}

export default App;
