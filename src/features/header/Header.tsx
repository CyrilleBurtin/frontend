'use client';

import LoginBar from '@/features/header/LoginBar';
import UserBar from '@/features/header/UserBar';
import { useSession } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return <>{session ? <UserBar /> : <LoginBar />}</>;
}
