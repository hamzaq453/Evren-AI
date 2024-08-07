import React from 'react'
const Button = (props) => {
  return (
    <>
    <div>
        <button className="duration-300 transform hover:scale-105 text-[14px] font-medium bg-primary text-white border-none py-[12px] px-[20px] rounded-[40px] cursor-pointer tracking-wide transition-transform ease-in active:scale-[0.9] focus:outline-none hover:bg-[#3b3dad] sm:text-[15px] sm:py-[12px] sm:px-[25px] ">{props.content}</button>
    </div>

    </>
  )
}

export default Button
