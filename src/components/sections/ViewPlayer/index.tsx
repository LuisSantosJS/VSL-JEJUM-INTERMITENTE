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
                <iframe id='video' className={styles.videoP} style={{width: '100%', height: '100%'}} frameBorder={'0'} allowFullScreen={fullscreen ? true :  false} src={`http://www.youtube.com/embed/ISyrxPtSuaY?autoplay=1&showinfo=0&controls=0`}   autoSave='true'    >
                
                </iframe>
            </div>
            <a className={styles.cocc}  href="https://pay.hotmart.com/D57798978G?checkoutMode=2" >
            <img className={styles.buyButton} src={BuyButtonIcon}/>
            
            </a>
        </div>
        </>
    )
}
export default ViewPlayer;