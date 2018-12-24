import React, { Component } from 'react'

import './double.css'

class Double extends Component {

    saveText = () => {
        
        var textToWriteOne = document.getElementById('textarea-en').value;
        var textToWriteTwo = document.getElementById('textarea-ar').value;
        var textFileAsBlob = new Blob([textToWriteOne,'\n' , textToWriteTwo], {type: 'text/plain'});
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
            <main className='main'>
                <div className='tools'>
                <button
                type='button'
                onClick={() => {this.saveText()}}
                value='Save'
                id='save'
                >
                Save
                </button>
                </div>
                <textarea 
                id="textarea-en"
                className='textarea-en' 
                name="en-text"
                rows="34" cols="100"
                lang="en"
                wrap="hard">
                </textarea>
                <textarea 
                id="textarea-ar"
                className='textarea-ar'
                name="en-text"
                rows="34" cols="100"
                lang="ar"
                wrap="hard">
                </textarea>
            </main>
        );
    }
}

export default Double