import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router';

import Home from './components/Home';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
