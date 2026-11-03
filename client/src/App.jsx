import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import AuthModule from './components/AuthModule.jsx';
import StudentPortal from './components/StudentPortal.jsx';

export default function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (pathname.startsWith('/student')) {
      document.getElementById('student-portal')?.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      document.getElementById('auth-root')?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [pathname]);

  return (
    <div style={{ padding: '20px 0' }}>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <StudentPortal />
              <AuthModule initialMode="login" />
            </>
          )}
        />
        <Route path="/login" element={<AuthModule initialMode="login" />} />
        <Route path="/register" element={<AuthModule initialMode="register" />} />
        <Route
          path="/student/*"
          element={<StudentPortal onBackToHome={() => navigate('/')} />}
        />
      </Routes>
    </div>
  );
}
