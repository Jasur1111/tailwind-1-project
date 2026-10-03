import React from 'react'

const Footer = () => {
    return (
        <section className='bg-[#C8A44E] w-full h-90.5 p-15'>
            
            <hr className='text-white' />
            <br />
            <div className='text-white font-bold flex items-center gap-100 my-2.5'>
                <h1>INFORMATION</h1>
                <h1>SERVICES</h1>
                <h1>INTERNET</h1>
                <h1>FOLLOW US ON SOCIAL MEDIA</h1>
            </div>
            <div className='flex text-white items-center gap-90 my-2.5'>
                <p>Contact Us</p>
                <p>Update Personal Information</p>
                <p>Internet Services</p>
                <p>Join Us</p>
            </div>
            <div className='flex text-white items-center gap-100 my-2.5'>
                <p>Our Address</p>
                <p>Special Offers</p>
                <p>Information</p>
                <p>Privacy Policy</p>
            </div>
            <div className='flex text-white items-center gap-100 my-2.5'>
                <p>SMS Services</p>
                <p>Careers</p>
                <p>Choose a Service</p>
                <p>Main Services</p>
            </div>
            <br />
            <br />
            <hr className="text-white" />
        </section>
    )
}

export default Footer