import Head from 'next/head'
import Input from '../components/Input'
import Login from '../components/Login'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Todo App</title>
      </Head>

      <Login />
    </div>
  )
}
