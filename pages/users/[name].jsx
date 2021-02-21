import fetch from "isomorphic-unfetch";
import css from "styled-jsx/css";

const style = css `
    h2 {
        margin-left: 20px;
    }
    .user-bio {
        margin-top: 12px;
        font-style: italic;
    }
`;

const username = ({ user }) => {
    console.log(user);
    return (
        <>
            {user ? (
                <div>
                    <h2>{user.login}</h2>
                    <p className="user-bio">{user.bio}</p>
                </div>
            ) : (
                <div>유저 정보가 없습니다.</div>
            )}
            <style jsx>{style}</style>
        </>
    )
}

// export const getServerSideProps = async ({ query }) => {
//     console.log('name : ' + name);
//     try {
//         const res = await fetch(`https://api.github.com/users/${name}`);
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

username.getInitialProps = async ({ query }) => {
    const { name } = query;
    try {
        const res = await fetch(`https://api.github.com/users/${name}`);
        if (res.status === 200) {
            const user = await res.json();
            // return { props: { user } };
            // console.log(user);
            return { user };
        }
        return { props: {} };
    } catch(e) {
        console.log(e);
        return {};
    }
};

export default username;