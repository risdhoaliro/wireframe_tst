import React from 'react';
import { Shield } from 'lucide-react';

const LoginHeader: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <div className="relative inline-block">
        <Shield className="w-16 h-16 text-emerald-500 dark:text-emerald-400" />
        <div className="absolute inset-0 animate-pulse bg-emerald-500/20 dark:bg-emerald-400/20 rounded-full blur-xl" />
      </div>
      <h2 className="mt-4 text-3xl font-bold text-emerald-900 dark:text-emerald-100">
        Teknologi Sukses Terus
      </h2>
      <p className="mt-2 text-emerald-600 dark:text-emerald-400">
        Wireframe New Project TST
      </p>
    </div>
  );
};

export default LoginHeader;