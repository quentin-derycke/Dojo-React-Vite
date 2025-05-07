import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
// import PrivateRoutes from './PrivateRoutes';
// import NotFound from './NotFound';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />

        {/* <Route path="/app/*" element={<PrivateRoutes />} />

        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
