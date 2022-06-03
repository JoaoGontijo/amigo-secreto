import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;