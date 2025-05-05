import { useState, useEffect } from "react";

export const UseFetch = (url) => {

    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const data = await response.json();
                if (response.ok) {
                    if (Array.isArray(data.results)){
                        setMovieData(data.results);
                    }
                    else{
                        setMovieData(data);
                    }
                    setLoading(false);
                }
                else {
                    setError(response.statusText);
                    setLoading(false);
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [url])
    return { movieData, loading, error }
}