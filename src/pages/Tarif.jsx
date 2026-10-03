import React from 'react'
import rasm3 from '../assets/rasm3.png'
import Footer from './Footer'
const Tarif = () => {
  return (
    <div>
      <div>
        <img className='w-430 h-140 flex justify-center mx-22 mt-25' src={rasm3} alt="" />
      </div>
      <div className='mx-23 mt-10'>
        <p className='text-[#0563AB] text-2xl font-bold '>Тарифы</p>
        <div className='pt-4'>
          <h1 className='font-bold text-6xl'>Гибкие варианты <br /> ценообразования</h1>
        </div>
        <div className='pt-4'>
          <h1 className='text-2xl'>Рассчитайте стоимость доставки</h1>
          <div className='flex gap-64 items-center'>
            <div>
              <div className='flex gap-4 my-5 mx-2'>
                <input className=' text-center rounded-2xl p-4 border-2 border-solid border-[#9C9C9C]' type="text" placeholder='From' />
                <input className=' text-center rounded-2xl p-4 border-2 border-solid border-[#9C9C9C]' type="text" placeholder='destination' />
              </div>
              <div className='flex gap-4 my-5 mx-2'>
                <input className=' text-center rounded-2xl p-4 border-2 border-solid border-[#9C9C9C]' type="text" placeholder='type' />
                <input className=' text-center rounded-2xl p-4 border-2 border-solid border-[#9C9C9C]' type="text" placeholder='kg' />
              </div>
              <div className='flex gap-4 my-10 mx-2'>
                <input className=' text-center rounded-2xl p-4 border-2 border-solid border-[#9C9C9C]' type="text" placeholder='Name' />
                <input className=' text-center rounded-2xl p-4 border-2 border-solid border-[#9C9C9C]' type="number" placeholder='Number' />
              </div>
              <div className='flex gap-4 my-5 mx-2'>
                <input className=' text-center rounded-2xl p-4 border-2 border-solid border-[#9C9C9C]' type="text" placeholder='Company name' />
                <input className=' text-center rounded-2xl p-4 border-2 border-solid border-[#9C9C9C]' type="text" placeholder='Email' />
              </div>
             
            </div>
             <div className='flex gap-4 gap-y-4 flex-row'>
                <div>
                  <div className='bg-[#F6F6F6] w-74.5 h-39 text-center'>
                    <div>
                      <h1 className='font-bold text-xl'>Доставка по адресу</h1>
                    </div>
                    <div className='mt-4'>
                      <p className='text-xl'>Delivery to the recipient's <br /> address with a convenient <br /> time specified</p>
                    </div>
                  </div>
                  <div className='bg-[#F6F6F6] w-74.5 h-39 text-center mt-3'>
                    <div>
                      <h1 className='font-bold text-xl'>Собственный <br /> автопарк</h1>
                    </div>
                    <div>
                      <p  className='text-xl'>We provide a wide range <br /> of services for the <br /> transportation of goods </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='bg-[#F6F6F6] w-74.5 h-39 text-center'>
                    <div>
                      <h1 className='font-bold text-xl'>Односторонний <br /> платеж</h1>
                    </div>
                    <div>
                      <p className='text-xl'>You pay the cost of one- <br />way transportation, <br />you do not pay. </p>
                    </div>
                  </div>
                  <div className='bg-[#F6F6F6] w-74.5 h-39 text-center mt-3'>
                    <div>
                      <h1 className='font-bold text-xl'>Доставка груза <br /> всего за минуту</h1>
                    </div>
                    <div>
                      <p className='text-xl'>We guarantee high-quality <br /> delivery of cargo exactly <br /> on time.</p>
                    </div>
                  </div>

                </div>

              </div>
          </div>


        </div>
      </div>
    <Footer />
    </div>
  )
}

export default Tarif