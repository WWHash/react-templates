import React from 'react'
import style from './Post.module.css'

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='altImage' />
      {props.message}
      <div>
        <span>Like: {props.likeCount}</span>
      </div>
    </div>
  )
}

export default Post
