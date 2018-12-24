import React from 'react';
import black from './img/black.svg'
import white from './img/white.svg'
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
                        <h1><span>Single Editor</span></h1>
                    </div>
                    <div className="overlay"></div>
                </div>
                <div className='side side-right'>
                    <div className='intro-content'>
                        <div className='profile'>
                            <img src={black} alt='double-editor'></img>
                        </div>
                        <h1><span>Double Editor</span></h1>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div>    
        </div>
    </div>
);

export default Main