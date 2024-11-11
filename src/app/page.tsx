import Image from "next/image"
export default function Home() {
  return (
    <main className="mx-10">
      {/* Hero Section */}
      <section className="flex gap-6 items-center">
        {/* Left side */}
        <div className="flex-1">
          <h1 className='font-bold text-3xl '>Hi I m Ahmad Raza Qureshi</h1>
          <p className='text-lg text-gray-600 mt-2'>
            I m a full-stack developer with a passion for building beautiful
            websites and applications.
            I m a full-stack developer with a passion for building beautiful
            websites and applications.
          </p>
          <button className='bg-gray-900 text-white py-2 mt-4 px-4' >View My Work</button>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <Image width={500} height={500} src="/ar3.jpg" alt="profile" />
        </div>
      </section>
    </main>
  );
}