import React from "react";
import styles from './styles.module.scss'
import PlayButtonIcon from '../../../assets/playButton.png'
import BuyButtonIcon from '../../../assets/buy.png'
const ViewPlayer: React.FC = () => {
    return (
        <div className={styles.containerViewPlayer}>
            <span className={styles.title}>
                O <span className={styles.bgTitle}>MÉTODO AMERICANO</span> QUE FAZ
                <br />
                VOCÊ EMAGRECER EM  <span className={styles.bgTitle}>15 DIAS</span> MESMO
                <br />
                QUE VOCÊ SEJA UM TOTAL  <span className={styles.bgTitle}>PREGUIÇOSO</span>
            </span>

            <div className={styles.viewPlayer}>
                <img src={PlayButtonIcon}/>
            </div>
            <img className={styles.buyButton} src={BuyButtonIcon}/>
        </div>
    )
}
export default ViewPlayer;