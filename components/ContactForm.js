import { PlusCircleIcon } from "@heroicons/react/solid"

function CotactForm() {
  return (
    <div className='p-8 shadow-xl'>
      <div className='text-center mb-8'>
        <h3 className='text-lg font-semibold text-blue-900'>
          กรอกรายละเอียดที่คุณต้องการ
        </h3>
        <p>เฉพาะลูกค้าที่ต้องการจ้างงานเท่านั้น</p>
      </div>

      <h3 className='text-gray-500  my-3 text-lg'>รายละเอียดของงาน</h3>

      <div className='flex space-x-3'>
        <textarea className='w-9/12 h-24 overflow-y-scroll border-[1px] border-gray-400 rounded-md'></textarea>
        <div className='relative flex-grow  border-dashed  border-2  p-3 '>
          <div className=' absolute top-1/4  text-center'>
            <PlusCircleIcon className='h-6 mx-auto' />
            <p className='text-[9px]'>ตัวอย่างงาน (Reference) สูงสุด 25MB</p>
          </div>
        </div>
      </div>

      <input
        type='text'
        className='w-full my-6 h-9 outline-none  border-[1px]  border-gray-500 rounded-md focus:shadow-md pl-5'
        placeholder='ลิงค์ตัวอย่างผลงาน'
      />

      <div className='grid grid-cols-2 space-x-4'>
        <input
          type='text'
          className='  h-9 outline-none  border-[1px]  border-gray-500 rounded-md focus:shadow-md pl-5'
          placeholder='ราคางานที่ตั้งไว้ (Budget)'
        />
        <input
          type='text'
          className='  h-9 outline-none  border-[1px]  border-gray-500 rounded-md focus:shadow-md pl-5'
          placeholder='วันที่ต้องการรับงาน'
        />
      </div>

      <h3 className='text-gray-500  my-3 text-lg'>ข้อมูลติดต่อกลับ</h3>
    </div>
  )
}

export default CotactForm
