import NewsItem from "./NewsItem";
import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import ColorBox from "./ColorBox";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    `;

const sampleArticle = {

    title:'제목',
    description: "내용",
    url : 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160'
}

const NewsList = ({category}) =>{

    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const query = category === 'all' ? '' : `&category=${category}`
                console.log("query->", query)
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=3344dfac5419471394ba8ac2501346f1`);
                setArticles(response.data.articles);

            }catch (e){
                console.error(e)
            }
            setLoading(false);
        }

        fetchData();
    }, [category]);



    if(loading){
        return <NewsListBlock>대기중......</NewsListBlock>;
    }
    if(!articles){
        return null;
    }


    return (
        <>
            <ColorBox/>

            <NewsListBlock>
                {articles.map(article => (
                    <NewsItem key={article.url} article={article}/>
                ))}
            </NewsListBlock>
        </>
    )
}

export default NewsList;