'use client';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthContextProvider from '@/contexts/AuthContext';

interface ContextProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export default function ContextProvider({ children }: ContextProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </QueryClientProvider>
  );
}
