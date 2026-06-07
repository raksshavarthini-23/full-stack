import React from 'react'

const Childs = ({name,age,marks,person}) => {
  return (
    <>
    <div>{name}</div>
    <div>{age}</div>
    {marks.map((val,i)=>(
        <p key={i}>{`${i+1} : ${val}`}</p>
    ))}
    </>
  )
}

export default Childs