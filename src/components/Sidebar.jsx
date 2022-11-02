import { PencilLine } from "phosphor-react";

import styles from './Sidebar.module.css';

export function Sidebar () {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />
            <div className={styles.profile}>
                <div className={styles.moldura}>
                    <img 
                        className={styles.avatar} 
                        src="https://github.com/MarcusJantorno.png" alt="Imagem de Perfil Marcus Jantorno" 
                    />
                </div>
                <strong className={styles.name}>Marcus Jantorno</strong>
                <span className={styles.description}>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}