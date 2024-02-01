import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
                const result = await response.json();
                setDetails(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching details:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>; // You can show a loading indicator
    }

    return (
        <div>
            <h1>SHOW KA NAAM DE DETE HAI</h1>
            <hr />
            <h2>Show Details</h2>
            {details ? (
                <div>
                    <p>Show Name: {details.name}</p>
                    <p>Show Type: {details.type}</p>
                    {/* Add more details as needed */}
                </div>
            ) : (
                <p>No details available</p>
            )}
        </div>
    );
}
