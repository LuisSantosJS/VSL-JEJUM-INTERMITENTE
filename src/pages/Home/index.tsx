import React from 'react';
import ViewPlayer from '../../components/sections/ViewPlayer'
import CenterView from '../../components/sections/CenterView'
import FooterView from '../../components/sections/FooterView'
//@ts-ignore
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Home: React.FC = () => {


    return (
        <div className='previewApp'>
            <div className='App'>
                <ViewPlayer />
                <CenterView/>
                <FooterView/>
            </div>
        </div>
    )
}
export default Home;