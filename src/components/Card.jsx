import React from 'react'

function Card(props) {
    const { id, name, email } = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 tc'>
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card