import React from 'react'
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img src='https://cs11.pikabu.ru/post_img/big/2019/11/23/6/157450204217337987.jpg' alt="alt" />
      </div>

      <div>
        <div className={style.content__logo}>
          <img src="https://v.od.ua/uploads/92/logo.png" alt="alt" />
        </div>
        <div>
          description
        </div>
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile
