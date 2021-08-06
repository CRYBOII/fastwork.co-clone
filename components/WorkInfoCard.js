import Image from "next/image"
function WorkInfoCard({ hImg, bImg, title, des, details }) {
  return (
    <div className='h-[500px] border-[1px] border-gray-300 p-4'>
      <div className='text-center'>
        <div className='relative h-7'>
          <Image src={hImg} layout='fill' objectFit='contain' />
        </div>

        <h1 className='font-bold text-lg py-2'>{title}</h1>
        <h3 className='font-bold text-md py-1'>{des}</h3>

        <div className='relative h-60'>
          <Image src={bImg} layout='fill' objectFit='contain' />
        </div>

        <p className='text-gray-500'>{details}</p>
      </div>

      <div className='border-b-[1px]  border-gray-100 my-2' />
      <p className='text-gray-500'>บริการช่วยหาฟรีแลนซ์</p>
      <div className='border-b-[1px]  border-gray-100 my-2' />
      <p className='text-gray-500'>ดูงานทั้งหมด</p>
    </div>
  )
}

export default WorkInfoCard
