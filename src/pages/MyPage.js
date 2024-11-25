import {Navigate} from "react-router-dom";


const MyPage = ()=>{


    
    const isLoggedIn = true;

    if(!isLoggedIn){

        return(
            // Link는 클릭을 해야 이동하고 Navigage는 자동으로 리다이렉트
            <Navigate to={"/login"} replace={true}/>
        )
    }

    return (
        <div>이곳은 MyPage....</div>
    )
}

export default MyPage;