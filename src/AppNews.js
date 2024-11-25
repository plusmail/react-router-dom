import {useState} from "react";
import axios from 'axios';

const AppNews = () => {
    const [data, setData] = useState(null)
    const onClick = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                // response는 json 형식의 데이터
                setData(response.data);
            })
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