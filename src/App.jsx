import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from './App.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Joao" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
          <Post author="Joao" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
        </main>
      </div>

    </>

  )
}


