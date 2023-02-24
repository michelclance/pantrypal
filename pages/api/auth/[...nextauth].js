import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { connectToDatabase } from '../../../utils/mongodb';
import bcrypt from 'bcrypt';

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const db = await connectToDatabase();

        const user = await db.collection('users').findOne({ email: credentials.email });

        if (!user) {
          throw new Error('No user found');
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error('Invalid password');
        }

        return { email: user.email };
      }
    })
  ],
  database: process.env.MONGODB_URI
});
