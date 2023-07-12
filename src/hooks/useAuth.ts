'use client';
import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
