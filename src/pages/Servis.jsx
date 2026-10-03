import React from 'react'
import rasm1 from '../assets/Group 18.png'
import rasm2 from '../assets/rasm1.png'
import Footer from './Footer'
const Servis = () => {
  return (
    
      <div>
          <div className='mx-14'>
      <div className='my-4'>
        <p className='text-[#c9a84c]'>Services</p>


        <div className='my-4'>
          <h1 className='text-5xl '>Откройте для себя полный <br /> спектр услуг, которые мы <br /> предлагаем для доставки</h1>

        </div>
        <div>
          <img className='w-320 h-125 my-16' src={rasm1} alt="" />
        </div>
      </div>

      <div>
        <div>
          <p className='text-[#c9a84c]'>FAQs</p>
          <br />
          <div>
            <h1 className='text-5xl'>Звук от наших <br /> счастливых партнеров</h1>
          </div>
          <br />
          <br />
          <div className='flex items-center gap-76'>
            <div>
              <p className='text-2xl text-[#494949]'>"Thank you very much Cicero for saving my <br /> time. With Cicero, the delivery of goods is <br /> faster even though it is very far away.
                 I also <br /> don't need to be afraid and doubtful because <br /> Cicero provides a place to store my shipping <br /> documents and makes it easier
                 with excellent <br /> real-time trackiing”</p>
                 <br />
                 <h1 className='text-3xl'>ChristinaMartha Tiahahu</h1>
            </div>
            <div>
              <img className='w-147 h-98 rounded-2xl' src={rasm2} alt="" />
            </div>
            
          </div>
        </div>


      </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
       </div>
    
  )
}

export default Servis