import React from 'react'

type Props = {
    childern: React.ReactNode
}

function layout ({childern}: Props) {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        {childern}
    </div>
  )
}

export default layout 