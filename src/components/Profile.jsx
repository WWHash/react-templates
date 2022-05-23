import React from 'react';

const Profile = () => {
  return (
    <div className='content'>
      <div>
        <img src='https://cs11.pikabu.ru/post_img/big/2019/11/23/6/157450204217337987.jpg' alt="alt" />
      </div>

      <div>
        <div className='content__logo'>
          <img src="https://v.od.ua/uploads/92/logo.png" alt="alt" />
        </div>
        <div>
          description
        </div>
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div>
          <div>post1</div>
          <div>post2</div>
          <div>post3</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
