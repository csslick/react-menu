import React from 'react'

export default function Menu({menuItems}) {
  console.log(menuItems)
  return (
    <article>
     {
       menuItems.map(item => {
         return (
          <div className="menu-item" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <p>{item.price}</p>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </div> 
         )
       })
     }
    </article>
  )
}
