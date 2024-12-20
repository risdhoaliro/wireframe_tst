import React from 'react';
import LoginForm from './components/auth/LoginForm';
import Dashboard from './components/dashboard/Dashboard';
import ThemeToggle from './components/theme/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const BinaryBackground: React.FC = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none select-none opacity-5 dark:opacity-10">
    <div className="animate-slide whitespace-nowrap text-[80px] leading-none">
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="font-mono">
          {Array.from({ length: 50 }).map((_, j) => 
            Math.random() > 0.5 ? '1' : '0'
          ).join(' ')}
        </div>
      ))}
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-emerald-900 relative overflow-hidden transition-colors duration-200">
      <BinaryBackground />
      <ThemeToggle />
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-emerald-500/20">
              <LoginForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;