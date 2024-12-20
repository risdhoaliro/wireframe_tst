// import { User } from '../types/auth';

// export const dummyUsers: User[] = [
//   {
//     id: '1',
//     email: 'demo@example.com',
//     name: 'Demo User',
//     avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop'
//   }
// ];

// export const validateCredentials = (email: string): User | null => {
//   // For demo purposes, accept any password for demo@example.com
//   if (email === 'demo@example.com') {
//     return dummyUsers[0];
//   }
//   return null;
// };

// src/data/dummyUsers.ts
import { User } from '../types/auth';

interface UserWithPassword extends User {
  password: string;
}

export const dummyUsers: UserWithPassword[] = [
  {
    id: '1',
    email: 'test@mail.com',
    name: 'QA Risdho',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop',
    password: 'password123'
  }
];

export const validateCredentials = (email: string, password: string): UserWithPassword | null => {
  const user = dummyUsers.find((user) => user.email === email);
  if (user && user.password === password) {
    return user;
  }
  return null;
};