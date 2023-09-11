import styles from "./styles.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.itemfirst}>
            <img className={styles.img} src="images/logo_welbex.png" alt='logo'></img>
            <div className={styles.underlogo}><br/>крупный интегратор CRM в Росcии и ещё 8 странах</div>
            </div>
            <div  className={styles.itemseccond}>
                <p>услуги виджеты интеграции кейсы сертифекаты</p>
                
            </div>
            <div className={styles.number}>+7 555 555-55-55</div>
            <div className={styles.itemthird}>
            <img className={styles.phone} src="images/telegram.png" alt='logo'></img>
            <img className={styles.phone} src="images/viber.png" alt='logo'></img>
            <img className={styles.phone} src="images/whatsapp.png" alt='logo'></img>
            </div>
        </div>
    )
};
export default Header;