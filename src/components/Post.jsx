import styles from './Post.module.css';

export function Post (props){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar} 
                        src="https://github.com/MarcusJantorno.png" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>{props.name}</strong>
                        <span>{props.office}</span>
                    </div>
                </div>

                <time title="11 de Maio as 08:13h" dateTime="2022-05-11 08:13:30">Publicada há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '} 
                    <a href="#">#nlw</a>{' '} 
                    <a href="#">#rocketseat</a>
                </p>
            </div>
            

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe seu comentário"
                />
                <footer>
                    <button type="submit">Pulicar</button>
                </footer>                
            </form>

        </article>
    )
}