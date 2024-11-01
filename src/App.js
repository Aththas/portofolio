import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './Pages/Index-page/IndexPage';
import ProjectPage from './Pages/Project-page/ProjectPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<IndexPage initial={true} />} />
          <Route path='/home' element={<IndexPage initial={false} />} />
          <Route path='/project' element={<ProjectPage />} />
        </Routes>
    </Router>
  );
}

export default App;
