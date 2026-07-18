import Image from 'next/image'
import React from 'react'

const Delhi = () => {
  return (
    <div className='flex justify-center items-center'>

            <section className="flex flex-col items-center justify-center gap-6 px-4 py-10 text-center sm:px-6 sm:py-14 lg:py-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-brand sm:text-3xl lg:text-4xl">
          Best Marketing Agency in Delhi
        </h2>
        <p className="mt-2 text-base text-muted-foreground sm:text-lg">
          Malviya Nagar, New Delhi
        </p>
      </div>
      <Image src="/images/delhi1.jpg" alt='delhi' height={900} width={900}/>
      </section>

        
    </div>
  )
}

export default Delhi