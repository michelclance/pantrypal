import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import LandingPage from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <head>
        <title>PantryPal</title>
      </head>
      <LandingPage />
      {/* Other page content goes here */}
    </div>
  )
}
