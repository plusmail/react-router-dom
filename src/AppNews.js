import {useState} from "react";
import axios from "axios";
import NewsList from "./components/NewsList";


const AppNews = () => {

    const [data, setData] = useState(null)
    const onClick = async () => {

        try {
            const response
                = await axios.get(
                    'https://newsapi.org/v2/everything?q=Apple&from=2024-11-24&sortBy=popularity&apiKey=3344dfac5419471394ba8ac2501346f1',);
            setData(response.data);
        } catch (e) {
            console.error(e)
        }

    };

    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {
                data &&
                <textarea rows={7}
                          value={JSON.stringify(data, null, 2)}
                          readOnly={true}/>
            }
        </div>
    )
}

export default AppNews;