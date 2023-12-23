import React from 'react'

const CardItem = ({id,url,body,price}) => {

    function onClickHandler() {
        return 0
    }
    console.log("prop are: ",id,url,body,price)
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