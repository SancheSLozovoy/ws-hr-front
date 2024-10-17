import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskPage from '../pages/TaskPage/ui/TaskPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/:documentId" element={<TaskPage />} />
            </Routes>
        </Router>
    );
};

export default App;
