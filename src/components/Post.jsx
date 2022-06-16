import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" alt="" />
          <div className={styles.authorInfo}>
            <strong>Sr Oliver</strong>
            <span>Web Dev</span>
          </div>
        </div>

        <time title="15 de Junho às 19:00" dataTime="2022-06-15 19:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋</p>
        <p>Mais um projeto React saindo</p>
        <p><a href=""> 👉 github.com/oliverthecat</a></p>
        <p className={styles.hash}>
          <a href="">#novoprojeto</a> 
          <a href="">#reactjs</a>
          <a href="">#front-end</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder='Deixe o seu comentário'/>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>


      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}