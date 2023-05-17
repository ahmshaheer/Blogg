import React, { useState } from 'react';
import '../cssfiles/showingp.css'
// import { useState } from 'react';

const ShowingPage = ({ numbers, textArea }) => {
    const [isChecked, setIsChecked] = useState([])

    const handleForDelete = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setIsChecked([...isChecked], value)
        } else {
            setIsChecked(isChecked.filter((e) => e !== value))
        }
        console.log(value)
    }
    return (
        <div className='showingBlogContainer' >
            <input type='checkbox' value={numbers} checked={numbers.isChecked} onChange={(e) => handleForDelete(e)} />
            <span className='spanNumbers'>{numbers}.</span>
            <span className='originalBlog'>{textArea}</span>
        </div >
    );
}

export default ShowingPage;
