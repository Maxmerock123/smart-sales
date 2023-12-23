import React from 'react'

const OtherForm = () => {

  function handleChange() {
    return 0;
  }
  function onClickHandler() {
    return 0;
  }


  return (
    <>
      <div className='bg-custom-orange rounded-[15px] min-w-[80%] flex justify-center m-5 p-10 shadow-2xl'>
        <form className='flex flex-col w-full gap-5'>
          <div>
            <label className='text-white' htmlFor='name'>อื่นๆ กรอกที่นี่</label><br />
            <input className='rounded-[15px] h-8 shadow-2xl' type='text' id='name' name='name' onChange={handleChange} /><br />
          </div>
          <div className='flex justify-end'>
            <button className='bg-custom-brown px-5 text-white rounded-[15px] shadow-2xl' onClick={onClickHandler}>ข้าม</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default OtherForm