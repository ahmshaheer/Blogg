import React from 'react';
import { useState } from 'react';
import '../cssfiles/homep.css'

import SearchIcon from "../pics/search.svg";

const defaultValues = {
    textArea: ''
}

const HomePage = () => {
    const [words, setWords] = useState(defaultValues)
    const [showBloggs, setShowBlog] = useState([])
    const [isChecked, setIsChecked] = useState([])

    // For Searching
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);


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

    // clear All
    const clearAllBlogg = () => {
        setShowBlog([])
    }


    const handleForDelete = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setIsChecked([...isChecked, parseInt(value)]);
        } else {
            setIsChecked(isChecked.filter((e) => e !== parseInt(value)));
        }
    };

    // Custom Delete
    const customDelete = (e) => {
        const updatedBlogPosts = showBloggs.filter((_, idx) => !isChecked.includes(idx));
        setShowBlog(updatedBlogPosts);
        setIsChecked([]);
    }


    const handleInputSearch = (event) => {
        const newQuery = event.target.value.toLowerCase();
        setQuery(newQuery);
        if (newQuery === '') {
            setFilteredData('');
        } else {
            const newData = showBloggs.filter((item) => {
                return item.textArea.toLowerCase().includes(newQuery);
            });
            setFilteredData(newData);
        }
    };

    return (
        <div className='fullBlog'>
            <h3 className='bHeading'>Write About Your To Do List:</h3>

            {/* For Finding */}
            <div className='navbar-search'>
                <input type='text' placeholder='Search' value={query} onChange={handleInputSearch} />
                <img className='searchIcon' src={SearchIcon} alt='SearchIcon' />
            </div>
            <ul>
                {filteredData && filteredData.map((item, idx) => (
                    <li key={idx}>{item.textArea}</li>
                ))}
            </ul>
            {/* Writing About Blog */}
            <textarea rows="14" cols="50" onChange={e => textAreaHandler(e)} name='textArea' value={textArea} placeholder='Write something'>
            </textarea>
            {/* Button */}
            <div className='btns'>
                <button className='btnWrite' onClick={showBlog}>Submit</button>
                <button className='btnWrite' onClick={clearAllBlogg}>Clear All</button>
                <button className='btnWrite' onClick={customDelete}>Delete</button>
            </div>

            {/* Showing the Blog  */}
            {showBloggs.map((show, idx) => {
                return (
                    <div key={idx + 1}>
                        <input type='checkbox' value={idx + 1} checked={idx.isChecked} onChange={(e) => handleForDelete(e)} />
                        <span className='spanNumbers'>{idx + 1}.</span>
                        <span className='originalBlog'>{show.textArea}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default HomePage;
