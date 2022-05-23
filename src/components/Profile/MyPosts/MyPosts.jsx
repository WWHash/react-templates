import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={style.content}>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={style.posts}>
          <Post message='Hi, how are post' likeCount='10'/>
          <Post message="It's my first post" likeCount='45' />
        </div>
      </div>
    </div>
  )
}

export default MyPosts
