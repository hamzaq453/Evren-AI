import React from 'react'

const Whyus = (props) => {
  return (
    <>
    <div class="rounded-md bg-[#F1FAFF] p-8 text-center drop-shadow-xl shadow-xl transition-transform ease-in-out duration-300 transform hover:scale-105">
                <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-color-swatch"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                    <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                    <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                    <line x1="17" y1="17" x2="17" y2="17.01"></line>
                  </svg>
                </div>
                <h3 class="mt-6 text-primary font-bold">{props.title}</h3>
                <p class="my-4 mb-0 font-normal text-sm leading-relaxed tracking-wide text-black small:text-xs">
               {props.description}

                </p>
              </div>
    </>
  )
}

export default Whyus
