import Image from "next/image"
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
    </div>
  )
}

export default FirstSection
