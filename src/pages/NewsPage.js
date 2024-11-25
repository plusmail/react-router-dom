import {useParams} from "react-router-dom";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import ColorBox from "../components/ColorBox";
import ColorContext, {ColorProvider} from "../contexts/color";
import SelectColors from "../components/SelectColors";


const NewsPage = () => {

    const params = useParams();
    const category = params.category || 'all';

    console.log("paa", params.category)

    return (
        <>
            <ColorProvider>
                <div>
                    <SelectColors/>
                    <ColorBox/>
                </div>
            </ColorProvider>
            <Categories category={category}/>
            <NewsList category={category}/>
        </>
    );
}

export default NewsPage