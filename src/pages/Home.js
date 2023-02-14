import React from 'react';
import { ArticlesList } from '../components/ArticlesList';
import {data} from '../components/mock';

export const Home = () => {
    return (
        <div className="overlay">
            <ArticlesList data={data}/>
        </div>
    )
}