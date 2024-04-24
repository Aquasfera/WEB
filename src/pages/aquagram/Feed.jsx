/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Post from "../../components/Post";
import NavheadAquapedia from "../../components/NavheadAquapedia";
import Loading from "../../components/Loading";

function Feed() {

    const [posts, setPosts] = useState([]);
    const API_URL = import.meta.env.VITE_API_URL;
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO;

    const [feedTrigger, setFeedTrigger] = useState(0);
    useEffect(() => {
        fetch(API_URL + 'post')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                console.log(data)
            })
            .catch(error => console.error(error))

    }, [feedTrigger])

    return (
        <>
            <div className="container-fluid">
                <div className=" row">
                    {posts.map(post => {
                        return (
                            <Post
                                id={post.id}
                                username={post.user?.username}
                                avatar={post.user?.avatar}
                                location={post.location?.name}
                                img={`${API_PHOTOS}${post.url}`}
                                comment={post.description}
                                likes={post.likes}
                                key={post.id}
                                animal={post.animal?.name}
                                feedTrigger={feedTrigger}
                                setFeedTrigger={setFeedTrigger}
                            />

                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Feed;