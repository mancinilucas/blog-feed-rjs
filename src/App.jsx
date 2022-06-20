import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50",
      name: 'Sr Oliver',
      role: 'Web Developer',
    },
    content:[
      { type: 'paragraph', content: 'Fala galera 👋'},
      { type: 'paragraph', content: 'Mais um projeto React saindo'},
      { type: 'link', content: '👉 github.com/oliverthecat'}
    ],
    publishedAt: new Date('2022-06-20 13:40:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1589135002384-dfc41953f58a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50",
      name: 'Mira Dev',
      role: 'Software Eng',
    },
    content:[
      { type: 'paragraph', content: 'Fala galera 👋'},
      { type: 'paragraph', content: 'Mais um projeto React saindo'},
      { type: 'link', content: '👉 github.com/miradev'}
    ],
    publishedAt: new Date('2022-06-20 20:40:00'),
  }
]

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(posts =>{
            return(
              <Post
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </>

  )
}


