import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import BrowseArticles from './pages/BrowseArticles';
import ArticleDetail from './pages/ArticleDetail';
import SubmitManuscript from './pages/SubmitManuscript';
import ReviewDashboard from './pages/ReviewDashboard';
import EditorialDashboard from './pages/EditorialDashboard';
import UserDashboard from './pages/UserDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutJournal from './pages/AboutJournal';
import IssuesArchive from './pages/IssuesArchive';
import { UserRole } from './types';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>('guest');

  const handleLogin = (role: UserRole) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('guest');
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header 
          isAuthenticated={isAuthenticated} 
          userRole={userRole}
          onLogout={handleLogout}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowseArticles />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/about" element={<AboutJournal />} />
            <Route path="/issues" element={<IssuesArchive />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            
            <Route 
              path="/submit" 
              element={isAuthenticated ? <SubmitManuscript /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/dashboard" 
              element={isAuthenticated ? <UserDashboard userRole={userRole} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/review" 
              element={isAuthenticated && (userRole === 'reviewer' || userRole === 'editor') ? 
                <ReviewDashboard /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/editorial" 
              element={isAuthenticated && (userRole === 'editor' || userRole === 'admin') ? 
                <EditorialDashboard /> : <Navigate to="/login" />} 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
