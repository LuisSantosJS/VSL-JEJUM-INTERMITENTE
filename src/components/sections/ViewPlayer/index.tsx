import React, {useRef, useState, useEffect} from "react";
import styles from './styles.module.scss'
import PlayButtonIcon from '../../../assets/playButton.png'
import BuyButtonIcon from '../../../assets/buy.png'
//@ts-ignore
import YouTubePlayer from 'react-player/lib/players/YouTube';
import ReactPlayer from "react-player"
//@ts-ignore
import Video from '../../../assets/video.mp4'
const ViewPlayer: React.FC = () => {
    const player = useRef<any>();
    var vid: any = document.getElementById("video");

    const [fullscreen, setFullscreen] = useState<boolean |null>(null);
    useEffect(()=>{
        if(fullscreen == null) return
    
        if(fullscreen) {
            play()
        }else{
            vid.pause();
        }
     
    },[fullscreen])


    const play = () =>{
    if(!fullscreen) return;
    return vid.play();

    }

    return (
        <>
        <div className={styles.containerViewPlayer}>
            <span className={styles.title}>
                O <span className={styles.bgTitle}>MÉTODO AMERICANO</span> QUE FAZ
                <br />
                VOCÊ EMAGRECER EM  <span className={styles.bgTitle}>15 DIAS</span> MESMO
                <br />
                QUE VOCÊ SEJA UM TOTAL  <span className={styles.bgTitle}>PREGUIÇOSO</span>
            </span>

        
            <div onClick={()=> {
            
                setFullscreen(!fullscreen)
                }} className={fullscreen ? styles.viewPlayerFull: styles.viewPlayer}>
                <video  muted={false} id='video' className={styles.videoP} style={{width: '100%'}} loop autoPlay  autoSave='true'   controls={ false} >
                    <source  src={Video} type="video/mp4"/>
                </video>
            </div>
            <img className={styles.buyButton} src={BuyButtonIcon}/>
            
        </div>
        </>
    )
}
export default ViewPlayer;