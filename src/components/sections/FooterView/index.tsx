import React from 'react';
import styles from './styles.module.scss'
const FooterView: React.FC = () => {
    return (
        <>
            <div className={styles.containerFooter}>
                <div className={styles.viewFooter}>
                    <span className={styles.notVend}>
                        PROIBIDA A VENDA
                        NÃO <span style={{ color: '#000' }}>AUTORIZADA</span>
                    </span>
                    <br />
                    <br />
                    <span className={styles.dessc}>
                        A venda do Método intermitente só pode ser realizada através deste site, registrado em nome de Sparkle LTDA. Qualquer outro site onde você encontre este programa é uma FALSIFICAÇÃO e vai contra as leis. Evite falsificações e recuse conteúdos ilegais ou pirateados. NÃO adquira programas parecidos e que não são baseados em anos de estudo da psicologia comportamental. Não nos responsabilizamos por compras realizadas em outros sites.
                    </span>
                    <br />
                    <br />
                    
                 

                    <span className={styles.desscss}>
                        Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 ás 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.
                    </span>
                </div>
            </div>
        </>
    )
}
export default FooterView;