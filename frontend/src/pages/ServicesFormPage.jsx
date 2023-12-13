import React from 'react'





const ServicesFormPage = () => {

  function onClickHandler() {
    return 0
  }
  function handleChange() {
    return 0
  }
  
  return (
    <>
      <div className='bg-custom-yellow rounded-[15px] min-w-[80%] flex justify-center m-5 p-10'>
        <form className='flex flex-col w-full'>
          <label className='' htmlFor='place'>สถานที่จัดงาน *</label><br />
          <input className='rounded-[15px] h-8 ' type='text' id='name' name='place' onChange={handleChange} /><br />
          <label className='' htmlFor='people'>จำนวนแขก *</label><br />
          <input className='rounded-[15px] h-8' type='number' id='number' name='people' onChange={handleChange} /><br />
          <label className='' htmlFor='eventTime'>เวลาจัดงาน</label><br />
          <input className='rounded-[15px] h-8' type='text' id='lineId' name='eventTime' onChange={handleChange} /><br />
          <label className='' htmlFor='eatTime'>เวลาพร้อมทาน</label><br />
          <input className='rounded-[15px] h-8' type='text' id='lineId' name='eatTime' onChange={handleChange} /><br />
          <label className='' htmlFor='elevator'>ลิฟท์ขนของ</label><br />

          <div className='flex justify-end'>
            <button className='bg-custom-brown px-5 text-white rounded-[15px]' onClick={onClickHandler}>ถัดไป</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ServicesFormPage