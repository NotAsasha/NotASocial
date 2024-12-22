import React, { useState, useEffect } from 'react';

const DataFetcher: React.FC = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []); // Порожній масив залежностей

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    );
};

export default DataFetcher;
