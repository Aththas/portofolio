import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import IndexPage from './Pages/Index-page/IndexPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<IndexPage/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
