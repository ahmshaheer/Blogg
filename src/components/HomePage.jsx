import React from 'react';
import { useState } from 'react';
import ShowingPage from './ShowingPage';
import '../cssfiles/homep.css'

const defaultValues = {
    textArea: ''
}

const HomePage = () => {
    const [words, setWords] = useState(defaultValues)
    const [showBloggs, setShowBlog] = useState([])

    let { textArea } = words

    // handle for keep record of text
    const textAreaHandler = e => {
        const { name, value } = e.target
        setWords({ ...words, [name]: value })
    }

    // showing words
    const showBlog = () => {
        if (!textArea.length) {
            alert('Add something')
        } else {
            setShowBlog([...showBloggs, words])
            setWords(defaultValues)
        }
    }

    // delete 
    const deleteSpecific = () => {
        const copyArr = [...showBloggs];
        copyArr.splice(-1);
        setShowBlog(copyArr);
    }

    // clear All
    const clearAllBlogg = () => {
        setShowBlog([])
    }

    return (
        <div className='fullBlog'>
            <h3 className='bHeading'>Write About Your Blog:</h3>
            {/* Writing About Blog */}
            <textarea rows="14" cols="50" onChange={e => textAreaHandler(e)} name='textArea' value={textArea} placeholder='Write something'>
            </textarea>
            {/* Button */}
            <div className='btns'>
                <button className='btnWrite' onClick={showBlog}>Submit</button>
                <button className='btnWrite' onClick={clearAllBlogg}>Clear All</button>
            </div>

            {/* Showing the Blog  */}
            {showBloggs.map((show, idx) => <ShowingPage key={idx} numbers={idx + 1} textArea={show.textArea} delfunc={deleteSpecific} />)}
        </div>
    );
}

export default HomePage;
