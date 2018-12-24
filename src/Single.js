import React, { Component } from 'react'
import './single.css'

class Single extends Component {

    saveText = () => {
        
        var textToWriteOne = document.getElementById('textarea-en').value;
        var textFileAsBlob = new Blob([textToWriteOne], {type: 'text/plain'});
        var fileNameToSaveAs = 'text.txt';

        var downloadLink = document.createElement('a');
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = 'Download File';
        if (window.webKitURL != null) {
            window.download.href = window.webKitURL.createObjectURL(textFileAsBlob);
        } else {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = window.destroyClickedElement;
            downloadLink.style.display = 'none';
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();
    }
    
    destroyClickedElement = (event) => {
        document.body.removeChild(event.target);
    }

    render() {
        return(
            <main className='main-single'>
                <div className='single-container'>
                    <button
                    type='button'
                    onClick={() => {this.saveText()}}
                    value='Save'
                    id='savesingle'
                    >
                    Save
                    </button>
                    <textarea 
                    id="textarea-en"
                    className='textarea-single' 
                    name="en-text"
                    rows="35" cols="80"
                    lang="en"
                    wrap="hard">
                    </textarea>
                </div>
            </main>
        );
    }
}

export default Single