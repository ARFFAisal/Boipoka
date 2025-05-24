import React from 'react';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <div><Banner></Banner>
           
            <Books data={data}></Books>
            
        </div>
    );
};

export default Home;