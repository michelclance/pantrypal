import { signOut } from 'next-auth/client';

export default async function handler(req, res) {
  await signOut({ callbackUrl: process.env.NEXTAUTH_URL });
  res.redirect('/');
}
