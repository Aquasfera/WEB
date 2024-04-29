import { useEffect, useState } from "react";
import NavheadAquagram from "../../components/NavheadAquagram"
import Post from "../../components/Post";

function PersonalPost() {

    const [posts, setPosts] = useState([]);
    const [liked, setLiked] = useState(false);
    const API_URL = import.meta.env.VITE_API_URL;
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO ;
    useEffect(() => {
        fetch(API_URL + 'post')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
            .catch(error => console.error(error))

    }, [])

    const handleLike = async (postId, currentLikes) => {
        try {
            const updatedLikes = currentLikes + 1;

            const response = await fetch( API_URL + `post/${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    likes: updatedLikes
                })
            })

            if (response.ok) {
                const updatedPosts = posts.map(post => {
                    if (post.id === postId) {
                        return {
                            ...post,
                            likes: updatedLikes,
                        };
                    }
                    return post;
                });
                setPosts(updatedPosts);
                setLiked(!liked);

            } else {
                console.error('Error al actualizar los likes del post');
            }

        } catch (error) {
            console.error('Error al actualizar los likes del post:', error);
        }
    }


    return (
        <>
            {

                posts.map(post => {

                    return (
                        <Post username={post.user?.username} avatar={post.user?.avatar} location={post.location?.name} img={`${API_PHOTOS}${post.url}`}
                            comment={post.description}
                            key={post.id} likes={post.likes} onLike={() => handleLike(post.id, post.likes)} />

                    )

                })

            }
        </>

    )
}

export default PersonalPost;