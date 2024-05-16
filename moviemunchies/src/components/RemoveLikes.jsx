import React from 'react';

//svg gets the heart icon we want
//this handles adding to likes
const RemoveLikes = () =>
    {
        return (
            <>
            <span className="m-2">Remove from Likes</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heartbreak-fill" viewBox="0 0 16 16">
                <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77"/>
            </svg>
            </>
        )
    }

export default RemoveLikes;