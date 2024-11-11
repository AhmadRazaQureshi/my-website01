import Image from "next/image"
import React from 'react'

export default function About ()  {
  return (
    <main className="mx-10">
      {/* Hero Section */}
      <section className="flex gap-6 items-center">
        {/* Left side */}
        <div className="flex-1">
            <h1 className="text-4xl font-extrabold"> About</h1>
       
          <hr></hr>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <h1 className='mt-5 mb-10 font-bold text-3xl '>Hi, I'm Ahmad Raza Qureshi</h1>
          <p className='text-lg text-gray-900 mt-2'>
          We are passionate about creating innovative and user-friendly websites that meet the needs of our clients
          . With expertise in HTML, CSS, JavaScript, and Next.js, we strive to deliver high-quality web solutions 
          tailored to your specific requirements.
          Our mission is to provide exceptional service and ensure your  online presence 
          stands out. Whether you need a personal blog, a corporate website, or an e-commerce platform,
          we have the skills and experience to bring your vision to life.
          </p>

        </div>
    {/* Right Side */}
    <div className=" mt-10 mr-1 flex-1 sm-400">
          <Image width={600} height={400} src="/ar4.jpg" alt="profile" />
        </div>
      </section>
    </main>
  );
}
     
    

  