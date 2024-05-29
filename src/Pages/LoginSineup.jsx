import React from 'react'
import './CSS/loginsineup.css'

const LoginSineup = () => {
  return (
    <div className='loginsineup'>
      <div className="loginsineup__conteiner">
       <h1>войти</h1>
       <div className='loginsineup__fiels'>
        <input type="text" placeholder='Ваше имя' />
        <input type="email" placeholder='электроная почта' />
        <input type="password" placeholder='Паролть' />
       </div>
       <button>продолжить</button>
       <p className='loginsineup__login'> Уже есть аккаунт <span>войти здесь</span></p>
       <div className='loginsineup__agri'>
        <input type="checkbox" name='' id='' />
        <p>продолжая, я соглашаюсь с правиласи и принимаю пользовательвкое соглашение!</p>
       </div>
       </div>
        </div>
  )
}

export default LoginSineup