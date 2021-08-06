import { SearchIcon } from "@heroicons/react/solid"
import Image from "next/image"

function SubHeader() {
  return (
    <div
      className='relative h-[500px]'
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #1e40af, #2451b9, #2e61c3, #3b70cb, #4980d3)",
      }}
    >
      <div className='absolute top-1/4 text-center w-full text-white space-y-5'>
        <h2 className='font-semibold text-2xl'>เรามีฟรีแลนซ์มืออาชีพด้าน...</h2>
        <h1 className='font-bold text-4xl'>Web & Programming |</h1>
        <h3 className='font-semibold text-base'>
          ที่พร้อมเปลี่ยนไอเดียของคุณให้เป็นความจริง
        </h3>
        <div className='flex justify-around max-w-sm mx-auto pt-6 space-x-4'>
          <button className='bg-white px-5 py-3 text-blue-700 flex items-center space-x-2 rounded-lg'>
            <SearchIcon className='h-5' />
            <span>เริ่มหาฟรีแลนซ์</span>
          </button>
          <button className='px-5 py-3 border-2 border-white  rounded-lg'>
            ให้เราช่วยเลือกฟรีแลนซ์
          </button>
        </div>
        <div className='cursor-pointer relative bottom-[-60px] justify-evenly gap-x-8  grid grid-cols-2 md:flex  max-w-6xl mx-auto  bg-white w-full rounded-xl shadow-lg p-5 font-semibold text-gray-400 text-sm'>
          <div className=' w-24'>
            <div className='h-16'>
              <img
                className='mx-auto transform hover:-translate-y-2 duration-200 ease-out '
                src='https://fastwork.co/static-v4/images/category/industry-icon.svg'
                alt='industry icon'
              />
            </div>
            <p>เทรนด์มาแรง</p>
          </div>
          <div className=' w-24'>
            <div className='h-16'>
              <img
                className='mx-auto transform hover:-translate-y-2 duration-200 ease-out '
                src='https://firebasestorage.googleapis.com/v0/b/fastworkco-staging.appspot.com/o/categories%2Ffloating_icons%2Fgraphic.svg?alt=media&token=178c78c6-b0b1-4c96-a022-fa4ea87ef4ce'
                alt='industry icon'
              />
            </div>
            <p>เทรนด์มาแรง</p>
          </div>
          <div className=' w-24'>
            <div className='h-16'>
              <img
                className='mx-auto transform hover:-translate-y-2 duration-200 ease-out '
                src='https://firebasestorage.googleapis.com/v0/b/fastworkco-staging.appspot.com/o/categories%2Ffloating_icons%2Fmarketing.svg?alt=media&token=9aeea27e-908e-4dc7-a6e6-2ea89569dc87'
                alt='industry icon'
              />
            </div>
            <p>การตลาดและโฆษณา</p>
          </div>
          <div className=' w-24'>
            <div className='h-16'>
              <img
                className='mx-auto transform hover:-translate-y-2 duration-200 ease-out '
                src='https://firebasestorage.googleapis.com/v0/b/fastworkco-staging.appspot.com/o/categories%2Ffloating_icons%2Fwriting.svg?alt=media&token=ca9a0ca6-bde7-48ab-8874-dbbc8cf92754'
                alt='industry icon'
              />
            </div>
            <p>เขียนและแปลภาษา</p>
          </div>
          <div className=' w-24'>
            <div className='h-16'>
              <img
                className='mx-auto transform hover:-translate-y-2 duration-200 ease-out '
                src='https://firebasestorage.googleapis.com/v0/b/fastworkco-staging.appspot.com/o/categories%2Ffloating_icons%2Fvideo.svg?alt=media&token=2b003e88-62f0-4140-a3dc-4a0205f8cb1b'
                alt='industry icon'
              />
            </div>
            <p>ภาพและเสียง</p>
          </div>
          <div className=' w-24'>
            <div className='h-16'>
              <img
                className='mx-auto transform hover:-translate-y-2 duration-200 ease-out '
                src='https://firebasestorage.googleapis.com/v0/b/fastworkco-staging.appspot.com/o/categories%2Ffloating_icons%2Fprogramming.svg?alt=media&token=f7fb808e-3cba-4eb5-a377-1d6118c80506'
                alt='industry icon'
              />
            </div>
            <p>Web & Programming</p>
          </div>
          <div className=' w-24'>
            <div className='h-16'>
              <img
                className='mx-auto transform hover:-translate-y-2 duration-200 ease-out '
                src='https://firebasestorage.googleapis.com/v0/b/fastworkco-staging.appspot.com/o/categories%2Ffloating_icons%2Fconsultant.svg?alt=media&token=083f308b-6a83-4fe5-8d46-0f800ca592a8'
                alt='industry icon'
              />
            </div>
            <p>ปรึกษาและแนะนำ</p>
          </div>
          <div className=' w-24'>
            <div className='h-16'>
              <img
                className='mx-auto transform hover:-translate-y-2 duration-200 ease-out '
                src='https://firebasestorage.googleapis.com/v0/b/fastworkco-staging.appspot.com/o/categories%2Ffloating_icons%2Fecommerce.svg?alt=media&token=fbf1b472-7dc2-4121-a5ef-b3f72a81c975'
                alt='industry icon'
              />
            </div>
            <p>จัดการร้านค้าออนไลน์</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubHeader
