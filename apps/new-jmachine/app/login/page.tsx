'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [cpyCd, setCpyCd] = useState('');

  const handleLogin = async () => {
    const res = await signIn('credentials', {
      userId,
      password,
      cpyCd,
      redirect: false,
    });

    if (res?.ok) {
      window.location.href = '/fetchTest';
    } else {
      alert('로그인 실패');
    }
  };

  return (
    <div>
      <input placeholder="ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input placeholder="Company Code" value={cpyCd} onChange={(e) => setCpyCd(e.target.value)} />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}
