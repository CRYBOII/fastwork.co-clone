import Image from "next/image"
import WorkInfoCard from "./WorkInfoCard"
import { CheckIcon } from "@heroicons/react/solid"
import CotactForm from "./ContactForm"

function FirstSection() {
  return (
    <div className='mt-[400px] md:mt-[120px]'>
      <h3 className='text-2xl '>ทำไมถึงต้องใช้ Fastwork?</h3>
      <h1 className='text-4xl text-blue-900 '>
        เพราะเราเปลี่ยนไอเดียของคุณให้เป็นความจริง ด้วยฟรีแลนซ์มืออาชีพ
      </h1>
      <div className='grid md:grid-cols-3  grid-cols-1 py-14 text-gray-500'>
        <div className='flex space-x-3 items-center hover:bg-gray-50 hover:scale-90 transform transition duration-200 ease-out rounded-lg hover:shadow-md'>
          <img
            className='h-16'
            src='https://fastwork.co/static-v4/images/icons/group-people.svg'
            alt='group-people'
          />
          <div>
            <h1 className='font-bold text-lg'>ฟรีแลนซ์คุณภาพอันดับ 1</h1>
            <p>
              ฟรีแลนซ์ผ่านการคัดเลือก และยืนยันตัวตน กับ Fastwork
              สามารถตรวจสอบได้
            </p>
          </div>
        </div>
        <div className='flex space-x-3 items-center hover:bg-gray-50 hover:scale-90 transform transition duration-200 ease-out rounded-lg hover:shadow-md'>
          <img
            className='h-16'
            src='https://fastwork.co/static-v4/images/icons/shield.svg'
            alt='group-people'
          />
          <div>
            <h1 className='font-bold text-lg'>รับประกันการจ้างงาน</h1>
            <p>
              เงินของคุณจะได้รับความคุ้มครองตั้งแต่ฟรีแลนซ์เริ่มทํางานไปจนถึงได้รับงานที่พอใจ
            </p>
          </div>
        </div>
        <div className='flex space-x-3 items-center hover:bg-gray-50 hover:scale-90 transform transition duration-200 ease-out rounded-lg hover:shadow-md'>
          <img
            className='h-16'
            src='https://fastwork.co/static-v4/images/icons/shield.svg'
            alt='group-people'
          />
          <div>
            <h1 className='font-bold text-lg'>มีบริการที่หลากหลายให้เลือก</h1>
            <p>
              มีฟรีแลนซ์หลากหลายที่พร้อมให้บริการกว่า 150,000 คน จากกว่า 70
              หมวดหมู่
            </p>
          </div>
        </div>
      </div>

      <h1 className='text-4xl text-blue-900 '>
        เริ่มจ้างงานฟรีแลนซ์ง่ายๆ กับ Fastwork
      </h1>

      <div className='flex  space-x-3 justify-between py-24'>
        <div className='flex space-x-3  '>
          <div className='space-y-12'>
            <div className='flex space-x-4 hover:border-b-2 hover:-translate-y-2 transition ease-out'>
              <img
                className='h-8'
                src='https://fastwork.co/static-v4/images/icons/group-11651.svg'
                alt='group-11651'
              />
              <div>
                <h1 className='font-bold text-lg'>1. ค้นหาฟรีแลนซ์ที่ถูกใจ</h1>
                <p>พิจารณาจากผลงาน ความสามารถ และรีวิว</p>
              </div>
            </div>
            <div className='flex space-x-4 hover:border-b-2 hover:-translate-y-2 transition ease-out'>
              <img
                className='h-8'
                src='https://fastwork.co/static-v4/images/icons/group-11652.svg'
                alt='group-11651'
              />
              <div>
                <h1 className='font-bold text-lg'>2. พูดคุยรายละเอียด</h1>
                <p>อธิบายงานเพื่อให้ฟรีแลนซ์สร้างใบเสนอราคา</p>
              </div>
            </div>
          </div>
          <div className='space-y-12'>
            <div className='flex space-x-4 hover:border-b-2 hover:-translate-y-2 transition ease-out'>
              <img
                className='h-8'
                src='https://fastwork.co/static-v4/images/icons/group-11653.svg'
                alt='group-11651'
              />
              <div>
                <h1 className='font-bold text-lg'>3. ชำระเงินผ่าน Fastwork</h1>
                <p>Fastwork Guarantee ได้งานแน่นอน</p>
              </div>
            </div>
            <div className='flex space-x-4 hover:border-b-2 hover:-translate-y-2 transition ease-out'>
              <img
                className='h-8'
                src='https://fastwork.co/static-v4/images/icons/group-11654.svg'
                alt='group-11651'
              />
              <div>
                <h1 className='font-bold text-lg'>4. อนุมัติงานและรีวิว</h1>
                <p>ตรวจสอบงานที่ได้รับ อนุมัติ และรีวิวงาน</p>
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-[350px] h-[200px]'>
          <Image src='/images/web/asdd.jpg' layout='fill' objectFit='cover' />
        </div>
      </div>
      <div className='text-center'>
        <h1 className='text-4xl text-blue-900 mb-12'>
          เรามีบริการที่หลากหลาย ตามความต้องการของคุณ
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 space-x-2 mb-28'>
        {[...new Array(3)].map((x) => (
          <WorkInfoCard
            title='Fastwork Marketplace'
            des='สำหรับบุคคลทั่วไป / ธุรกิจขนาดเล็ก
'
            hImg='https://fastwork.co/static-v4/images/home/comparison/logo/marketplace.svg'
            bImg='https://fastwork.co/static-v4/images/home/comparison/marketplace.svg'
            details='เราคัดฟรีแลนซ์กว่า 7,500 คน จากหลากหลายอาชีพ ตั้งแต่งานขนาดเล็กถึงขนาดกลาง

'
          />
        ))}
      </div>

      <section className='grid grid-cols-1 md:grid-cols-2 space-x-4'>
        <div>
          <h3 className='text-gray-700 font-semibold text-xl'>
            Personal Assistant Service
          </h3>
          <h1 className='text-3xl text-blue-900 my-5 font-bold'>
            เราหาฟรีแลนซ์ให้...แค่อึดใจเดียว
          </h1>

          <div className='flex space-x-3'>
            <div>
              <div className='flex'>
                <CheckIcon className='h-5 text-green-400' />
                <p> คุมงบได้เอง</p>
              </div>
              <div className='flex'>
                <CheckIcon className='h-5 text-green-400' />
                <p> มีผู้ช่วยดูแลจนจบงาน</p>
              </div>
            </div>
            <div>
              <div className='flex'>
                <CheckIcon className='h-5 text-green-400' />
                <p> ตอบเร็วแน่นอน</p>
              </div>
              <div className='flex'>
                <CheckIcon className='h-5 text-green-400' />
                <p> การันตีคุณภาพงาน</p>
              </div>
            </div>
          </div>
          <div className='relative h-[420px] my-7'>
            <Image
              src='https://fastwork.co/static-v4/images/pa/pa-step-th.png'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
        <CotactForm />
      </section>
    </div>
  )
}

export default FirstSection
