import {useLocation, useSearchParams} from "react-router-dom";


const About = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page');
    const test = searchParams.get('test');

    const onTogglePage = () => {
        setSearchParams(
            {page, test: test === 'true' ? false : true}
        )
    }
    const onIncreasePage = () => {
        const nextPage = page === null ? 1 : parseInt(page) + 1;
        setSearchParams({page: nextPage, test});
    }

    return (
        <div>
            <h1>About</h1>
            <p>About 페이지</p>
            <p>쿼리 : {location.search}</p>
            <p>Page : {page}</p>
            <p>Test : {test}</p>

            <button onClick={onTogglePage}>Toggle Test</button>
            <button onClick={onIncreasePage}>페이지 증가</button>
        </div>
    )
}
export default About;