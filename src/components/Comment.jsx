import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import { useState } from 'react'

import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }){
  const [likeCount, setLikeCount] = useState(0)
  
  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    const totalLikeCount = likeCount

    setLikeCount(totalLikeCount + 1)
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/mancinilucas.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luscas.Dev</strong>
              <time title="15 de Junho às 19:00" dateTime="2022-06-15 19:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={(handleLikeComment)}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}