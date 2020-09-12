import React, { useState, useEffect } from 'react';
import axios from './axios';
import request from './requests';
import './Banner.css';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        
        async function fetchData(){
            const req = await axios.get(request.fetchNetflixOriginal);
            setMovie(
                req.data.results[
                    Math.floor(Math.random() * req.data.results.length - 1)
                ]);
            return req;
        } 

        fetchData();
    },[])
    
    //console.log(movie);

    var head = "";
    const backdrop = movie.backdrop_path == null ? "" : movie.backdrop_path;
    const over = movie.overview == null ? "" : movie.overview;  

    function truncate(str,n){
        return str.length > n ? str.substr(0,n-1) + "..." : str;
    }

    if(movie.title == null)
    {
        if(movie.name == null)
        {
            if(movie.original_name != null) 
            {
                head = movie.original_name;
            }
        }
        else
        {
            head = movie.name;
        }
    }
    else{
        head = movie.title;
    }

    return(
        <header className = "banner"
                style = {{
                    backgroundSize : "cover",
                    backgroundImage : `url(
                        "http://image.tmdb.org/t/p/original/${backdrop}"
                    )`,
                    backgroundPosition : "center center",
                }}>
            <div className = "banner_contents">
                <h1 className = "banner_title">
                    {head}
                </h1>
                <div>
                    <button className = "banner_buttons">Play</button> 
                    <button className = "banner_buttons">My List </button>
                </div>
                <div className = "banner_description">
                    <h1> {over!=null ? truncate(over,150) : ""} </h1>
                </div>
            </div>

            <div className = "banner_fadebottom" />
        </header>
    )
}

export default Banner;