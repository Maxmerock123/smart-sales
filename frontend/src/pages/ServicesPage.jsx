import React from 'react';
import Header from '../components/Header';
import '../index.css';
import { Navigate, useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const items = [
    { "title": "บริการที่ 1", "link": "/PackagePage" },
    { "title": "บริการที่ 2" },
    { "title": "บริการที่ 3" },
    { "title": "บริการที่ 4" },
  ]

  const navigate = useNavigate()
  function onClickHandler() {
    console.log("clicked");
    navigate(items[0].link)
  }




  return (
    <>
      <div className=''>
        <div className='flex flex-col items-center gap-5'>
          <h3 className='m-8 font-bold text-center'>เลือกประเภทงาน</h3>

          {/* cardContainer */}
          <div className='flex w-[100vw] gap-5 flex-wrap justify-center'>
            {items.map((item) => (
              <div className='flex flex-wrap  justify-center w-[150px] '>
                <div className='bg-slate-400 w-[150px] aspect-square rounded-[15px] text-center ' onClick={onClickHandler} >IMAGE</div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </>
  )
}

export default ServicesPage