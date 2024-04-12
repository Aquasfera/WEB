/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Post from "../components/Post";
import Navhead from "../components/Navhead";

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://192.168.1.244:3000/api/post')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                console.log(data)
                console.log(posts)
            })
            .catch(error => console.error(error))

    }, [])

    if (!posts.length) {
        return (
            <div className="spinner-border" role="status">
                <span >Loading...</span>
            </div>)
    }



    return (
        <>
            <Navhead />

            {posts.map(post => {

                return (

                    <Post
                        username={post.user?.username}
                        avatar={post.user?.avatar}
                        location={post.location?.name}
                        img={`http://192.168.1.244:3000/photos/${post.url}`}
                        comment={post.comment}
                        key={post.id}
                    />

                );
            })}
        </>
    );
}

export default Feed;