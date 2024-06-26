import React from 'react';
import MovieList from './MovieList';
import RemoveWatchLater from './RemoveWatchLater'; 


const WatchLaterPage = ({ watchLater, removeFromWatchLater,watchFunction }) => {
    const removeWatchLater=(id)=>{
        let list=[];
        for(var i=0;i<watchLater.length;i++){
            if(watchLater[i].imdbID===id){}
            else{
                list.push(watchLater[i]);
            }
        }
        watchFunction(list);
    }
    return (
        <>
            <h1>WATCH LATER PAGE</h1>
            <div>
                {}
                {watchLater.length === 0 ? (
                    <p>You don't want to watch anything later</p>
                ) : (
                    <div>
                        {}
                        {watchLater.map((movie, index) => (
                            <div key={index} className="image-container d-flex justify-content-start m-2">
                                <img src={movie.Poster} alt="movie poster" />
                                <div className="d-flex flex-column align-items-start">
                                    <h2>{movie.Title}</h2>
                                    <p>{movie.Year}</p>
                                    <p>{movie.Genre}</p>
                                    <p>{movie.Type.toUpperCase()}</p>
                                    <p>{movie.Plot}</p>
                                </div>
                                {}
                                <div onClick={() => removeWatchLater(movie.imdbID)} className="overlay d-flex align-items-center justify-content-center">
                                    <RemoveWatchLater />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default WatchLaterPage;
