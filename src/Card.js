import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <div>
                <img alt='robot' src={`https://robohash.org/qwerty${id}?200x200`}/>
            </div>
            
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;