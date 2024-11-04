import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './Pages/Index-page/IndexPage';
import ProjectPage from './Pages/Project-page/ProjectPage';
import EducationPage from './Pages/Education-page/EducationPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<IndexPage initial={true} />} />
          <Route path='/home' element={<IndexPage initial={false} />} />
          <Route path='/project' element={<ProjectPage />} />
          <Route path='/education' element={<EducationPage />} />
        </Routes>
    </Router>
  );
}

export default App;
