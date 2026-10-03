import React from 'react'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    
    <div className='flex justify-around items-center my-16'>
      <div className=''>
        <img className='w-sm h-124 rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44gYLwsaeBaODDzIjHADEp-79qJd0bNPeg6E3xEadH5hyitcN" alt="" />
      </div>
      <div className='flex flex-col gap-6'>
        <h1 className='text-6xl'>Доставка любых <br /> возможностей с <br /> одним грузом за <br /> раз</h1>

        <p className='text-2xl'>Calculate your shipment</p>


        <div>
          <div className='flex gap-4'>
            <input className=' text-center' type="text" placeholder='From' />
            <input className=' text-center' type="text"  placeholder='destination' />
          </div>
          <div>
            <input className=' text-center' type="text" placeholder='type' />
            <input className=' text-center' type="text" placeholder='kg' />
          </div>
        </div>


      </div>
    </div>
    <div className="min-h-screen  text-gray-800">

      
      <section className="px-10 py-10">

        <div className="flex justify-between">
          <div>
            <p className="mb-4 text-sm text-[#c9a84c]">
              About
            </p>

            <h1 className="text-4xl font-bold leading-tight">
              Решение для
              <br />
              потребностей
              <br />
              вашего бизнеса
            </h1>
          </div>

        </div>


       
        <div className="mt-8 grid grid-cols-3 gap-4">

          <div className="rounded-lg bg-white p-5 shadow-sm">
           

            <h3 className="text-sm font-bold">
              Your intercontinental
              <br />
              shipping solutions
            </h3>

            <p className="mt-3 text-xs text-gray-400">
              With enhanced supply chain solution will
              accelerate your business while also
              driving efficiency
            </p>
          </div>


          <div className="rounded-lg bg-white p-5 shadow-sm">
            <div className="mb-4 text-2xl text-[#c9a84c]">
              ▣
            </div>

            <h3 className="text-sm font-bold">
              Your intercontinental
              <br />
              shipping solutions
            </h3>

            <p className="mt-3 text-xs text-gray-400">
              With enhanced supply chain solution will
              accelerate your business while also
              driving efficiency
            </p>
          </div>


          <div className="rounded-lg bg-white p-5 shadow-sm">
            <div className="mb-4 text-2xl text-[#c9a84c]">
              🔑
            </div>

            <h3 className="text-sm font-bold">
              Your intercontinental
              <br />
              shipping solutions
            </h3>

            <p className="mt-3 text-xs text-gray-400">
              With enhanced supply chain solution will
              accelerate your business while also
              driving efficiency
            </p>
          </div>

        </div>

      </section>


      
      <section className="bg-white px-10 py-8">

        <div className="grid grid-cols-3 text-center">

          <div>
            <h2 className="text-3xl font-light">
              12+
            </h2>

            <p className="text-xs">
              Year Services
            </p>
          </div>


          <div className="border-x border-gray-300">
            <h2 className="text-3xl font-light">
              +20K
            </h2>

            <p className="text-xs">
              Cargo Delivered
            </p>
          </div>


          <div>
            <h2 className="text-3xl font-light">
              500
            </h2>

            <p className="text-xs">
              Total Cargo
            </p>
          </div>

        </div>

      </section>


     
      <section className="px-10 py-10">
        <div className="flex justify-between">

          <div>
            <p className="mb-4 text-sm text-[#c9a84c]">
              Advantages
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              Наши
              <br />
              преимущества
            </h2>
          </div>



        </div>


       
        <div className="mt-8 grid grid-cols-3 gap-4">

         
          <div className="rounded-lg bg-[#c9a84c] p-5 text-white">

            <div className="flex justify-between">
              <span className="text-2xl">
                01
              </span>

              
            </div>

            <h3 className="mt-8 font-bold">
              Точность
              <br />
              доставки
            </h3>

            <p className="mt-2 text-xs">
              Our commitment to precision ensures
              that your cargo arrives on time.
            </p>

          </div>


          
          <div className="rounded-lg bg-white p-5">

            <div className="flex justify-between">
              <span className="text-2xl">
                02
              </span>

            
              
            </div>

            <h3 className="mt-8 font-bold">
              Индивидуальные
              <br />
              решения каждый раз
            </h3>

            <p className="mt-2 text-xs text-gray-500">
              Our customer-centric approach means
              personalized solutions for your needs.
            </p>

          </div>


          
          <div className="rounded-lg bg-white p-5">

            <div className="flex justify-between">
              <span className="text-2xl">
                03
              </span>

             
            </div>

            <h3 className="mt-8 font-bold">
              Передовые
              <br />
              технологии
            </h3>

            <p className="mt-2 text-xs text-gray-500">
              Our advanced tracking systems provide
              real-time visibility into your shipment.
            </p>

          </div>

        </div>

      </section>
      <Footer />
    </div>
    </>
  )
}

export default Home