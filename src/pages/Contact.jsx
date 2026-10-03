import React from 'react'
import rasm1 from '../assets/rasm4.png'
import rasm2 from '../assets/rasm5.png'
import Footer from './Footer'
const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto w-300 px-4 py-4">


        <div className="h-96 w-full bg-gray-100">
          <img src={rasm1} alt="" />
        </div>


        <div className="grid grid-cols-2 gap-16 py-8 mt-4">
          <div>
            <p className="mb-4 text-xs font-medium text-blue-600">
              Связаться с нами
            </p>

            <h1 className="w-160 text-5xl font-semibold leading-tight">
              Обращайтесь к нам в любое время
            </h1>
          </div>


        </div>


        <div className="rounded bg-gray-100 p-7">
          <div className="grid grid-cols-2 gap-8">


            <div>
              <h2 className="mb-2 text-2xl font-semibold">
                Get in
               
                  touch
                  
              </h2>

              <p className="mb-4 w-100 text-xs leading-relaxed text-gray-500">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                Eu leo molestie, vel amet non id blandit netus.
              </p>

              <form>

                <input
                  type="text"
                  placeholder="Contact name"
                  className="h-8 w-full border-0 border-b border-gray-300 bg-transparent text-xs outline-none placeholder:text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Street"
                  className="h-8 w-full border-0 border-b border-gray-300 bg-transparent text-xs outline-none placeholder:text-gray-400"
                />

                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="col-span-2 h-8 border-0 border-b border-gray-300 bg-transparent text-xs outline-none placeholder:text-gray-400"
                  />


                </div>

                <input
                  type="text"
                  placeholder="Contact Phone"
                  className="h-8 w-full border-0 border-b border-gray-300 bg-transparent text-xs outline-none placeholder:text-gray-400"
                />

                <input
                  type="email"
                  placeholder="E-mail"
                  className="h-8 w-full border-0 border-b border-gray-300 bg-transparent text-xs outline-none placeholder:text-gray-400"
                />

              




                <p className="mt-1 text-xs text-gray-400">
                  Max file size 2 MB or types should not exceed 10MB
                </p>




                <button
                  type="submit"
                  className="mt-3 h-8 w-full rounded border border-blue-400 bg-transparent text-xs text-blue-400 transition hover:bg-blue-400 hover:text-white"
                >
                  SUBMIT
                </button>

              </form>


              <div className="mt-4 grid grid-cols-3 gap-4">

                <div className="flex gap-2">
                  <span className="text-sm">
                    ☎
                  </span>

                  <div>
                    <p className="text-xs font-semibold">
                      Phone
                    </p>

                   
                  </div>
                </div>

                <div className="flex gap-2">
                  <span className="text-sm">
                    ✉
                  </span>

                  <div>
                    <p className="text-xs font-semibold">
                      E-MAIL
                    </p>

                    
                  </div>
                </div>

                <div className="flex gap-2">
                  <span className="text-sm">
                    ▣
                  </span>

                  <div>
                    <p className="text-xs font-semibold">
                      HELPDESK
                    </p>

                    
                  </div>
                </div>

              </div>
            </div>


            <div className="h-109 w-135 bg-gray-100">
              <img className='h-109 w-125' src={rasm2} alt="" />
            </div>

          </div>
        </div>

      </div>
      <div className='mt-40'>
        <Footer />
      </div>
      
    </div>
  )
}

export default Contact