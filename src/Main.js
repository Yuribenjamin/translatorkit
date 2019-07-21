import React from 'react';
import { Link } from 'react-router-dom'
import black from './img/black.svg'
import white from './img/white.svg'
import './main.css'

const handleDonate = () => {
    const url = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=29SM3BMERQDDY&source=url';
    window.open(url)
}

const Main = () => (
    <div className='container'>
        <div className='transaltorkit'>
            <div className='intro'>
                <div className='side side-left'>
                    <header className='translateheader'>
                        <span>Free</span>
                        <h1>TransaltorKit</h1>
                    </header>
                    <div className='intro-content'>
                        <div className='profile'>
                        <img src={white} alt='double-editor'></img>
                        </div>
                        <h1><span><Link to='/single'>Single Editor</Link></span></h1>
                    </div>
                    <div className="overlay"></div>
                </div>
                <div className='side side-right'>
                <header className='translateheader'>
                        <p className="alert">Hello, this is Ibrahim Ragab. Thank you for using our service, the service started free and always will be free, Recently we gain more users using this beta service and we are looking for developing this service and give you best user experience.
                            We open a donation to developing this service to give you the best service you deserve.
                            use the button below to donate (minimum 1$) <strong>note: you can only donate by PayPal</strong></p>
                            <button onClick={handleDonate} id="alertbtn">Donate</button>
                    </header>
                    <div className='intro-content'>
                        <div className='profile'>
                            <img src={black} alt='double-editor'></img>
                        </div>
                        <h1><span><Link to='/double'>Double Editor</Link></span></h1>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div>    
        </div>
    </div>
);

export default Main