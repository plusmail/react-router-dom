import {Route, useParams} from "react-router-dom";

const data = {
    velopert: {
        name: '최영민',
        description: '영남인재교육원',
    },
    gildong: {
        name: '김관호',
        description: '농땡이..!!!!!'
    }
};

const Profile = () => {
    // <Route path={"/profile/:username"} element={<Profile/>}/>
    // :username 전달인자로 넘어오면
    // useParams() 를 params 객체로 변환
    // http://localhost:3000/profile/gildong
    // params에 username 변수에 gildong가 저장

    const params = useParams();
    const profile = data[params.username];

    console.log(profile)

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필 입니다.</p>
            )}
        </div>
    )
}

export default Profile;