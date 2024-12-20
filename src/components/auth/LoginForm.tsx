import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import LoginHeader from './LoginHeader';
import { useAuth } from '../../contexts/AuthContext';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
      <LoginHeader />

      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <Input
          icon={Mail}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address (demo@example.com)"
          required
        />

        <Input
          icon={Lock}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Encryption key (any password)"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-emerald-600 dark:text-emerald-400 focus:ring-emerald-500 border-emerald-300 dark:border-emerald-600 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-emerald-700 dark:text-emerald-300">
            Keep session active
          </label>
        </div>
      </div>

      <Button type="submit" isLoading={loading}>
        Access Dashboard
      </Button>

      <p className="text-center text-sm text-emerald-600 dark:text-emerald-400">
        Demo credentials: demo@example.com (any password)
      </p>
    </form>
  );
};

export default LoginForm;