import { useEffect, useState } from "react";
import Navhead from "../components/Navhead";
import Post from "../components/Post";

function PersonalPost() {

    const [posts, setPosts] = useState([]);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        fetch('http://192.168.1.244:3000/api/post')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
            .catch(error => console.error(error))

    }, [])

    const handleLike = async (postId, currentLikes) => {
        try {
            const updatedLikes = currentLikes + 1;

            const response = await fetch(`http://192.168.1.244:3000/api/post/${postId}`, {
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
                console.log(posts[0].likes)
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
            <Navhead />
            {

                posts.map(post => {

                    return (
                        <Post username={post.user?.username} avatar={post.user?.avatar} location={post.location?.name} img={`http://192.168.1.244:3000/photos/${post.url}`}
                            comment={post.description}
                            key={post.id} likes={post.likes} onLike={() => handleLike(post.id, post.likes)} />

                    )

                })

            }
        </>

    )
}

export default PersonalPost;