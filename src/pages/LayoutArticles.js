import {Outlet} from "react-router-dom";


const LayoutArticles = () => {
    return (
        <div>
            <header style={{background: 'lightblue', padding:16, fontSize:24}}>
                Articles 헤드 부분
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default LayoutArticles;