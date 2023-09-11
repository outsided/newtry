import styles from "./styles.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
             <div className={styles.first}>
                <h4>о компании</h4>
                <p>Партнёрская программа</p> 
                <p>Вакансии</p> 
             </div>
             <div className={styles.seccond}>
                <h4>меню</h4>
                <div className={styles.underseccond} >
                  <pre>
                  Расчёт стоимости            Кейсы <br/>
                  Услуги                      Благодарственные письма <br/>
                  Виджеты                     Сертификаты <br/>
                  Интеграции                  Блог на Youtube <br/>
                  Наши клиенты                Вопрос / Ответ
                 </pre>
                  </div>
             </div>
             <div className={styles.third}>
               <h4> контакты</h4>
               <div className={styles.underthird}>
                +7 555 555-55-55<br/>
                <img src="images/telegram.png" alt='img'></img>
                <img src="images/viber.png" alt='img'></img>
                <img src="images/whatsapp.png" alt='img'></img><br/>
                Москва, Путевой проезд 3с1, к 902<br/>
                <p className={styles.ps}>©WELBEX 2022. Все права защищены.<br/>
                Политика конфиденциальности</p>
            
               </div>
             </div>
        </div>
    )
}
export default Footer;