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
                    <div className="donation">
                        <div>
                            <p>Donate for continuous development</p>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="A8THPTEULHTHE" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                <img alt="" border="0" src="https://www.paypal.com/en_EG/i/scr/pixel.gif" width="1" height="1" />
                            </form>
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