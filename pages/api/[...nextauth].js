import NextAuth from 'next-auth'
import { Providers } from 'next-auth'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'

import { authHandler } from 'next-auth'

const options = {
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: MongoDBAdapter(process.env.MONGODB_URI),
}

const handler = (req, res) => authHandler(req, res, options)

export default handler


