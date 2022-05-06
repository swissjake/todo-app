import Head from 'next/head'
import Input from '../components/Input'
import Todo from '../components/Todo'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Todo App</title>
      </Head>

      <Input />
      
    </div>
  )
}
