import React from 'react';
import { useLocation } from "react-router-dom";
import {data} from '../components/mock';
import {SingleArticle} from '../components/SingleArticle';

export const Article = () => {
    const {search} = useLocation();
    const id = search.slice(4);
    const [dataById, setDataById] = React.useState({});
    React.useEffect(() => {
        const elem = data.find(item => String(item.id) === id);
        setDataById(elem)
    }, []);
    return (
        <SingleArticle data={dataById}/>
    )
}