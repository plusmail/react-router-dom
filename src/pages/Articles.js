import {Link, NavLink, Outlet} from "react-router-dom";

const Articles = () => {

    return (
        <div>
            {/*이 부분의 Outlet는 Article*/}
            <Outlet/>
            <ul>
                <ArticleItem id={1}/>
                <ArticleItem id={2}/>
                <ArticleItem id={3}/>
            </ul>

        </div>
    )
}

const ArticleItem = ({id}) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    }
    return (
        <li>
            {/*   `` 백틱입니다.*/}
            <NavLink to={`/articles/${id}`}
                     style={({isActive}) => (isActive ? activeStyle : undefined)}>
                게시글 {id}</NavLink>
        </li>
    )
}


export default Articles;