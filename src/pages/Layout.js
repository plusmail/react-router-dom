import {Outlet, useNavigate} from "react-router-dom";


const Layout = () => {
    const navigate = useNavigate();

    const goBack = ()=> {
        navigate(-1);
    }
    const goFront = ()=> {
        navigate(1);
    }

    const goArticles = ()=>{
        navigate('/articles', {replace : true})
    }
    const goHome = ()=>{
        navigate('/')
    }

    return (
        <div>
            <header style={{background: 'lightgray', padding:16, fontSize:24}}>
                <button onClick={goBack}>뒤로</button>
                <button onClick={goFront}>앞으로</button>
                <button onClick={goHome}>홈 이동</button>
                <button onClick={goArticles}>게시글로 이동</button>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;