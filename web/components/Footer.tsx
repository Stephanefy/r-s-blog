import styles from '../styles/Footer.module.css'




// const Inner = styled.div`
//     display: flex;
//     max-width: 1200px;
//     justify-content: center;
// `


const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
        <div className={styles.footerInner}>
            <div>
                <h3 style={{margin: '0.2em 0'}}>Lilly's blog</h3>
                <span className={styles.copyRight}>&copy;2022 りな</span>
            </div>
            <div>
                <p>made with ❤️ by Stephanefy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer


