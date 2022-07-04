import React from 'react'

function SearchBox({ onSearchChange, searchfeild }) {
    return (
        <div className='pd2 ma3'>
            <input className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search Tobots'
                onChange={onSearchChange}
            />
        </div>
    )
}

export default SearchBox