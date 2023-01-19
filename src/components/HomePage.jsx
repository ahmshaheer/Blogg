import React from 'react';
import { useState } from 'react';
import ShowingPage from './ShowingPage';
import '../cssfiles/homep.css'

const defaultValues = {
    textArea: ''
}

const HomePage = () => {
    const [thoughts, setThoughts] = useState(defaultValues)
    const [showThought, setShowThought] = useState([])

    let { textArea } = thoughts

    // handle for keep record of text
    const textAreaHandler = (e) => {
        const { name, value } = e.target
        setThoughts({ ...thoughts, [name]: value })
    }

    // showing thoughts
    const showBlog = () => {
        if (!textArea.length) {
            alert('Add something')
        } else {
            setShowThought([...showThought, thoughts])
            setThoughts(defaultValues)
        }
    }

    // delete 
    const deleteSpecific = () => {
        const copyArr = [...showThought];
        copyArr.splice(-1);
        setShowThought(copyArr);
    }

    // clear All
    const clearAllBlogg = () => {
        setShowThought([])
    }

    return (
        <div className='fullBlog'>
            <h3 className='bHeading'>Write About Your Blog:</h3>

            {/* Writing About Blog */}
            <textarea rows="14" cols="50" onChange={e => textAreaHandler(e)} name='textArea' value={textArea}></textarea>

            {/* Button */}
            <div className='btns'>
                <button className='btnWrite' onClick={showBlog}>Submit</button>
                <button className='btnWrite' onClick={clearAllBlogg}>Clear All</button>
            </div>

            {/* Showing the Blog  */}
            {showThought.map((show, idx) => <ShowingPage key={idx} numbers={idx + 1} textArea={show.textArea} delfunc={deleteSpecific} />)}
        </div>
    );
}

export default HomePage;
