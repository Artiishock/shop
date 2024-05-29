import React from 'react'
import './newsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Получить эксклюзивное предложение на email</h1>
        <p>Подпишись на рассылку чтобы быто в кусе новостей</p>
        <div>
            <input type="Email"placeholder='ваш email' />
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter