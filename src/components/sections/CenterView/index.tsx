import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
//@ts-ignore
import Aos from 'aos';
import 'aos/dist/aos.css';
import CinturaIcon from '../../../assets/cintura.png'
import SmileIcon from '../../../assets/smile.png'
import FriendsIcon from '../../../assets/friends.png'
import Cintura2Icon from '../../../assets/cintura2.png'


import Dep1Icon from '../../../assets/dep1.png'
import Dep2Icon from '../../../assets/dep2.png'
import Dep3Icon from '../../../assets/dep3.png'

import RiscoZeroICom from '../../../assets/riscozero.png'
import eBooks from '../../../assets/3books.png'

import PromotIcon from '../../../assets/promot.png'
import DescIcon from '../../../assets/desc.png'

import Buy2 from '../../../assets/buy2.png'
const CenterView: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const [footer0, setFooter0] = useState<boolean>(false)
    const [footer1, setFooter1] = useState<boolean>(false)
    const [footer2, setFooter2] = useState<boolean>(false)
    const [footer3, setFooter3] = useState<boolean>(false)
    return (
        <>
            <div className={styles.containerCenterPlayer}>
                <span className={styles.title}>
                    Quais os bnefícios do
                    <br />
                    JEJUM INTERMITENTE
                </span>

                <div className={styles.viewBenfices}>
                    <div className={styles.viewContBenefices}>
                        <div className={styles.viewBeneficesItem}>
                            <img className={styles.itemIconItemBenefices} src={CinturaIcon} />
                            <br />
                            <span className={styles.textItemTitle}>
                                <span className={styles.textItemTitleBg}>RESULTADOS</span>
                                <br />
                                <span className={styles.textItemTitleBg}>FANTÁSTICOS</span>
                            </span>
                            <br />
                            <span className={styles.textBody}>
                                Chega de passar raiva em frente
                                o <span className={styles.textBodyBg}>ESPELHO</span> nosso método fará você
                                perder peso de forma rápida e eficiente. Isso tudo graças a anos de estudo no ramo, entenda de uma vez por todas, você não precisa de dietas loucas para ter o corpo que sempre <span className={styles.textBodyBg}>SONHOU</span> e sua <span className={styles.textBodyBg}>AUTO-ESTIMA</span>  de volta.
                            </span>
                        </div>
                    </div>
                    <div className={styles.viewContBenefices}>
                        <div className={styles.viewBeneficesItem}>
                            <img className={styles.itemIconItemBenefices} src={SmileIcon} />
                            <br />
                            <span className={styles.textItemTitle}>
                                <span className={styles.textItemTitleBg}>MELHORA DA</span>
                                <br />
                                <span className={styles.textItemTitleBg}>SUA SAÚDE</span>
                            </span>
                            <br />
                            <span className={styles.textBody}>
                                O <span className={styles.textBodyBg}>MÉTODO INTERMITENTE</span> fará seu
                                quadro de saúde melhorar. Nele não buscamos fazer dietas "loucas", ou sucos "milagrosos", como vários outros métodos oferecem. Oferecemos algo simples, prático, e que até mesmo uma pessoa total preguiçosa vai conseguir fazer e ter resultados.
                            </span>
                        </div>
                    </div>
                    <div className={styles.viewContBenefices}>
                        <div className={styles.viewBeneficesItem}>
                            <img className={styles.itemIconItemBenefices} src={FriendsIcon} />
                            <br />
                            <span className={styles.textItemTitle}>
                                <span className={styles.textItemTitleBg}>VOLTE A</span>
                                <br />
                                <span className={styles.textItemTitleBg}>SOCIALIZAR</span>
                            </span>
                            <br />
                            <span className={styles.textBody}>
                                Todos nós sabemos o quanto é difícil
                                viver com a alto estima baixa, não ter vontade de socializar com seus amigos
                                por ter vergonha do seu próprio corpo.
                                é... eu sei. eu já passei por isso, é totalmente normal. O  <span className={styles.textBodyBg}>MÉTODO INTERMITENTE</span> fará com que você se sinta bem novamente com seu corpo.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerCenterDepoiments}>
                <div className={styles.viewCenterImageAndTextCon}>
                    <img width='100%' src={Cintura2Icon} />
                </div>
                <br />
                <div className={styles.viewCenterImageAndTextCon}>
                    <img style={{ cursor: 'pointer' }} width='80%' src={Buy2} />
                </div>
                <br />

                <span className={styles.titleDepoiments}>
                    <span className={styles.tttitleDepoiments}>DEPOIMENTOS</span> DE QUEM FEZ E
                    <br />
                    ACREDITOU NO <span style={{ color: '#B34E66' }}>NOSSO MÉTODO</span>
                </span>

                <div className={styles.viewRowDepoiments}>
                    <div className={styles.viewRowDepoimentsItem}>
                        <img width='95%' src={Dep1Icon} />
                    </div>
                    <div className={styles.viewRowDepoimentsItem}>
                        <img width='95%' src={Dep2Icon} />
                    </div>
                    <div className={styles.viewRowDepoimentsItem}>
                        <img width='95%' src={Dep3Icon} />
                    </div>
                </div>
            </div>
            <div className={styles.targa}>
                <span className={styles.textTarga}>
                    O código de defesa do consumidor (Art. 49) garante 7 dias para solicitar
                    reembolso em caso de insatisfação com o produto.
                    Nós confiamos tanto em nossos estudos
                    e pesquisas que lhe garantimos 15 dias de garantia incondicional!
                </span>
                <img style={{ zIndex: 9999 }} height='200px' width='240px' src={RiscoZeroICom} />
            </div>
            <div className={styles.containerCenterAbout}>
                <div className={styles.rowColumnItem}>
                    <div className={styles.metadeRowItemColumn}>
                        <span className={styles.titelss}>
                            ACHA QUE ACABOU?
                            <br />
                            BÔNUS EXCLUSIVO.
                        </span>
                        <span className={styles.textDescripr}>
                            Acha que acabou? Iremos oferecer alguns <span className={styles.textDescriprBG}>BÔNUS EXCLUSIVO</span>, para todos que optarem por ter o  <span className={styles.textDescriprBG}>MÉTODO INTERMITENTE</span>. eu poderia facilmente cobrar absurdos por isso, mas como confio totalmente no seu potencial, vou te dar esses bônus gratuito na conquista de resultados dentro do nosso método.
                        </span>
                    </div>
                    <div className={styles.metadeRowItemColumn}>
                        <img src={eBooks} />
                    </div>
                </div>


                <div className={styles.rowColumnItem}>
                    <div className={styles.metadeRowItemColumn}>
                        <img src={PromotIcon} />
                    </div>
                    <div className={styles.metadeRowItemColumn}>
                        <img src={DescIcon} />
                    </div>
                </div>
            </div>
            <div className={styles.vieAbout}>
                <span className={styles.textSpanAboutTitle}>PERGUNTAS FREQUENTES</span>
                <span onClick={()=> setFooter0(!footer0)} className={styles.textSpanAbout}>
                    <span>O que é método intermitente?</span>
                    <span>{footer0 ? `-`:`+`}</span>
                </span>
                {footer0 &&<span className={styles.textt}>
                    O que é Lorem Ipsum? Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos
                </span>}
                <span  onClick={()=> setFooter1(!footer1)} className={styles.textSpanAbout}>
                    <span>Este método faz mal para a saúde?</span>
                    <span>{footer1 ? `-`:`+`}</span>
                </span>
                {footer1 &&<span className={styles.textt}>
                    O que é Lorem Ipsum? Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos
                </span>}
                <span  onClick={()=> setFooter2(!footer2)} className={styles.textSpanAbout}>
                    <span>Posso beber água durante o método?</span>
                    <span>{footer2 ? `-`:`+`}</span>
                </span>
                {footer2 &&<span className={styles.textt}>
                    O que é Lorem Ipsum? Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos
                </span>}

                <span  onClick={()=> setFooter3(!footer3)} className={styles.textSpanAbout}>
                    <span>O que acontece se eu me arrepender de comprar?</span>
                    <span>{footer3 ? `-`:`+`}</span>
                </span>
                {footer3 &&<span className={styles.textt}>
                    O que é Lorem Ipsum? Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos
                </span>}
                <br/>
                <br/>
                <br/>
            </div>
        </>
    )
}
export default CenterView;