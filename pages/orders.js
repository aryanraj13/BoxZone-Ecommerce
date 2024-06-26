import React, { useEffect } from 'react'
import Order from '@/models/Order';
import mongoose from 'mongoose';
import { useRouter } from 'next/router';

const orders = () => {
  const router=useRouter()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
          router.push('/')
        }
      },[])
  return (
    <div>
            
      <div className='container mx-auto'>
      <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
      <h1 className='px-8 p-8 text-center font-semibold text-2xl'>My Orders</h1>
        <table
          className="min-w-full text-left text-sm font-light text-surface">
          <thead
            className="border-b border-neutral-200 font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="px-6 py-4">First</th>
              <th scope="col" className="px-6 py-4">Last</th>
              <th scope="col" className="px-6 py-4">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-purple-300  ">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">Otto</td>
              <td className="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
            <tr
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-purple-300  ">
              <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-4">Jacob</td>
              <td className="whitespace-nowrap px-6 py-4">Thornton</td>
              <td className="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-purple-300  ">
              <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td className="whitespace-nowrap px-6 py-4">Larry</td>
              <td className="whitespace-nowrap px-6 py-4">Wild</td>
              <td className="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let orders = await Order.find({});

  
  return {
    props: {orders:orders},
  };
}


export default orders
