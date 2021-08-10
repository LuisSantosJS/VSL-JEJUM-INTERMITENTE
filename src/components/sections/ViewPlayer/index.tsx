import React, {useRef, useState, useEffect} from "react";
import styles from './styles.module.scss'
import PlayButtonIcon from '../../../assets/playButton.png'
import BuyButtonIcon from '../../../assets/buy.png'
//@ts-ignore
import YouTubePlayer from 'react-player/lib/players/YouTube';
import ReactPlayer from "react-player"
const ViewPlayer: React.FC = () => {
    const player = useRef<any>();

    const [fullscreen, setFullscreen] = useState<boolean>(false);
  
  
    const handleFullscreen = (event: any) => {
    
      setFullscreen(!fullscreen);
    };

    return (
        <div className={styles.containerViewPlayer}>
            <span className={styles.title}>
                O <span className={styles.bgTitle}>MÉTODO AMERICANO</span> QUE FAZ
                <br />
                VOCÊ EMAGRECER EM  <span className={styles.bgTitle}>15 DIAS</span> MESMO
                <br />
                QUE VOCÊ SEJA UM TOTAL  <span className={styles.bgTitle}>PREGUIÇOSO</span>
            </span>

            <div onClick={handleFullscreen}  className={ fullscreen ? styles.viewPlayerFull: styles.viewPlayer}>
            <ReactPlayer
                muted={false}
                ref={player}
                loop={true}
                controls={false}
                playing={true}
                
                config={
                    {
                        youtube:{
                            playerVars:{
                                autoPlay: 1,
                                autoplay: 1
                            },
                            embedOptions:{
                            autoPlay: 1,
                            autoplay: 1
                            }
                            
                        }
                    }
                }
                fullscreen={fullscreen}
                url={'https://www.youtube.com/embed/1tjH8mVQUzk?autoplay=1&controls=0'}
            />
            </div>
            <img className={styles.buyButton} src={BuyButtonIcon}/>
           
        </div>
    )
}
export default ViewPlayer;