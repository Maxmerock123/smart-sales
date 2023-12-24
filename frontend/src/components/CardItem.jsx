import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardItem = ({ id, url, body, price }) => {
    const navigate = useNavigate()
    function onClickHandler(e) {
        if (e.target.id) {
            navigate(e.target.id)
        }
        else {
            console.log("element id not assigned")
        }
    }

    return (
        <>
            <div className='flex flex-col items-center w-[130px]'>
                <img src={url} id={id} className='object-cover object-left w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                <h3>{price}</h3>
                <p>{body}</p>
            </div>
        </>
    )
}

export default CardItem