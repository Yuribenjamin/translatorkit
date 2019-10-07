import React from 'react';
import { Link } from 'react-router-dom'
import black from './img/black.svg'
import white from './img/white.svg'
import donate from './img/donate.svg'
import paypal from './img/paypal.svg'
import './main.css'

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
                    <div className="donation">
                        <div>
                            <p>Donate for continuous development</p>
                            <p>donation Available For PayPal Only</p>
                            <img src={paypal} alt="paypal donate" width="50px"></img>
                            <a href="https://www.paypal.com/paypalme2/abrahamragab" target="_blank" rel="noreferrer noopener">
                            <img src={donate} alt="paypal donate" width="50px"></img>
                            </a>
                        </div>
                        <div className="congrats">
                        <p>Thanks!!!!</p>
                        <p>Ahmed Abolmaged: 10$</p>
                        <p>Mariel Haig: 5$</p>
                        <p>Ahmed Moustaf: 3$</p>
                        </div>
                    </div>
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