import React from 'react';
import '../cssfiles/showingp.css'
// import { useState } from 'react';

const ShowingPage = ({ numbers, textArea }) => {

    return (
        <div className='showingBlogContainer' >
            <span className='spanNumbers'>{numbers}.</span>
            <span className='originalBlog'>{textArea}</span>
        </div >
    );
}

export default ShowingPage;
