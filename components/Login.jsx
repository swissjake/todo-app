import React from 'react'
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from 'react';
import { redirect } from 'next/dist/server/api-utils';

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();
  

  // const handleLogin = () => {
  //   if(!session){
  //     router.push('/todoPage')

  //     return signIn
  //   }
  //   else{
  //    return signOut
  //   }
  // }

  //   if(!session){
  //     redirect: {
  //       destination: router.push('/todoPage')
  //     }
  // }else{
  //   !session
  // }

  
  

  return (
    <div>
      <h1 className='text-2xl font-semibold text-center mt-4'>Login With Google</h1>
      <div className='h-[100vh] flex items-center justify-center flex-col'>
        {!session && (
          <>
          Not signed in <br />
        <div onClick={() => signIn()} className='bg-black text-white shadow-md py-2 px-8 font-medium cursor-pointer rounded-md'>SignIn Here</div>
        </>
      )}
      {session && (
          <>
          signed in as<br />
        <div onClick={() => signOut()} className='bg-black text-white shadow-md py-2 px-8 font-medium cursor-pointer rounded-md'>Sign out</div>
        </>
      )}
      </div>
    </div>
  )
      }



// export async function getServerSideProps({req}){
//   const session = await UseSession({req})
//       if(!session){
//         redirect: {
//           destination: '/api/auth/todoPage'
//         }
//       }
//   return{
//     props: {
//       session
//     }
//   }
// }

export default Login