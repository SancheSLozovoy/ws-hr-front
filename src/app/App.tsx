import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskPage from '../pages/TaskPage/ui/TaskPage';
import { store } from './store';
import { Provider } from 'react-redux';


const App = () => {
    return (
      <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/:documentId" element={<TaskPage />} />
            </Routes>
        </Router>
      </Provider>
    );
};

export default App;
