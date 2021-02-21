// import fetch from "isomorphic-unfetch";

// const index = ({user}) => {
//     const username = user && user.login;
//     return <div>{username}</div>;
// };

// export const getServerSideProps = async () => {
//     try {
//         const res = await fetch(`https://api.github.com/users/suhyun-p`);
//         if (res.status === 200) {
//             const user = await res.json();
//             return {props: {user}};
//         }
//         return {props: {}};
//     } catch(e) {
//         console.log(e);
//         return {props: {}};
//     }
// }

// export default index;

import React, {useState} from "react";
import Link from "next/link";

const App = () => {
    const [username, setUsername] = useState("");
    return (
        <div>
            <label>
                username
                <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <p>{username} 깃허브 검색하기</p>
            <Link href={`/users/${username}`}>
                <a>검색하기</a>
            </Link>
        </div>
    )
}

export default App;