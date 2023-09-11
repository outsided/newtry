import styles from "./styles.module.css"
const Content = () => {
    return (
        <div className={styles.content}>
            <div className={styles.first}>
              <h2>
                 Зарабатывайте<br/>
                 больше<br/>
                 <strong className={styles.welbex}>с WELBEX</strong><br/>
                </h2>
                 <p>Развиваем и контролируем <dr/>
                 продажи за вас</p>
            </div>
            <div className={styles.seccond}>
                <h2>Вместе с бесплатной<br/> консультацией мы дарим:</h2>
                <div className={styles.lside}>
                    <h3>Виджеты</h3>
                    <p>30 готовых решений</p>
                    <h3>Skype Аудит</h3>
                    <p>отдела продаж<br/> и CRM системы</p>
                </div>
                <div className={styles.rside}>
                    <h3>Dashboard</h3>
                    <p>с показателями<br/> вашего бизнеса</p>
                    <h3>35 дней</h3>
                    <p>использования <br/>CRM</p>
                </div>
                <button>Получить консультацию</button>
            </div>
        </div>
    )
}
export default Content;