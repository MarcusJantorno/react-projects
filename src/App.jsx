import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />  
        <main>
          <Post 
            name="Marcus Jantorno"
            office="Web Developer" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non labore recusandae omnis reprehenderit animi explicabo eaque molestias id debitis neque. Vero rem tenetur, magni praesentium voluptatem necessitatibus sapiente iure non." 
          />
          <Post 
            name="Sheyla Nobre"
            office="UX Design"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, expedita non. Voluptatem unde consequatur ipsam, eaque tempore culpa iure, hic officia, pariatur magnam odit quod quos! Distinctio facilis praesentium iusto."
          />
        </main>
      </div>
    </div>  
    )
}