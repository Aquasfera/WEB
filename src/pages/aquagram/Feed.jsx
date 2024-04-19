/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Post from "../../components/Post";
import NavheadAquapedia from "../../components/NavheadAquapedia";

function Feed() {

    const [posts, setPosts] = useState([]);
    const API_URL = import.meta.env.VITE_API_URL;
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO;

    useEffect(() => {
        fetch(API_URL + 'post')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                console.log(data[0].id)
            })
            .catch(error => console.error(error))

    }, [])

    // const handleLike = async (postId, currentLikes) => {
    //     try {
    //         const updatedLikes = currentLikes + 1;

    //         const response = await fetch(`${API_URL}/like`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },

    //             body: JSON.stringify({
    //                 userId: 1,
    //                 postId: data[0].id,
    //             })
    //         })

    //         if (response.ok) {
    //             const updatedPosts = posts.map(post => {
    //                 if (post.id === postId) {
    //                     return {
    //                         ...post,
    //                         likes: updatedLikes,
    //                     };
    //                 }
    //                 return post;
    //             });
    //             setPosts(updatedPosts);
    //             console.log(posts[0].likes)
    //             setLiked(!liked);

    //         } else {
    //             console.error('Error al actualizar los likes del post');
    //         }

    //     } catch (error) {
    //         console.error('Error al actualizar los likes del post:', error);
    //     }
    // }

    if (!posts.length) {
        return (
            <div className="spinner-border" role="status">
                <span ></span>
            </div>)
    }



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
                                animal={post.animal.name}

                            />

                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Feed;