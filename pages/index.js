import Head from 'next/head'
import Body from '../components/Body'
import Header from '../components/Header'
import Section from '../components/Section'
import { getSession, useSession } from "next-auth/client"
import Login from '../components/Login'

export default function Home() {

  const [session] = useSession();
  console.log(session);
  
  if(!session) return <Login />

  return (
    <div>
      <Head>
        <title>Google Docs Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Section />
      <Body />
      
    </div>
  )
}