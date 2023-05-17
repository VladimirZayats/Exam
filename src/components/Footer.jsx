import React from 'react'

const Footer = () => {
  return (
    <div className='container'> 
<footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
  <div className= 'col mb-3'> 
    <img src=' img/6687330.jpg' className='bi me-2' width={210} height={210}>
    </img>
 <p>
   КОЛЯНЫЧ - надежный друг
 </p>
</div>
<div>   </div>
<div className='col mb-4'>
<h5>Контактная информация</h5>
  <ul className= 'nav flex-column'>
    <li className='nav-item mb-3'>
      <a className='nav-link p-0 text-muted'>Адрес: Родники, улица Горького, 1А</a>
    </li>
    <li className= 'nav-item mb-3'>
      <a className= 'nav-link p-0 text-muted'>Номер телефона: +7(902)319-84-90</a>
    </li>
    <li className= 'nav-item mb-3'>
      <a className= 'nav-link p-0 text-muted'>VK: ukolyanameat</a>
    </li>
  </ul>
</div>

<div className=' col mb-4'>
<h5>Руководство</h5>
  <ul className= 'nav flex-column'>
    <li className='nav-item mb-3'>
      <a className='nav-link p-0 text-muted'>Генеральный директор: Корчагин Илья</a>
    </li>
    <li className= 'nav-item mb-3'>
      <a className= 'nav-link p-0 text-muted'> Руководитель отдела МТС и логистики: Заяц Владимир</a>
    </li>
  </ul>
</div>
</footer> 
</div>
  )
}

export default Footer