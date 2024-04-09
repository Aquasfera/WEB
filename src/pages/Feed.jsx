import { useEffect, useState } from "react";
import Post from "../components/Post";
import Navhead from "../components/Navhead";

function Feed() {

    const [posts, setPosts] = useState([]);
    const [locations, setLocations] = useState([]);
    let idLocation;

    useEffect(() => {
        fetch('http://192.168.1.244:3000/api/post')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                posts.forEach(post => {
                    idLocation = post.location_id;
                    fetch(`http://192.168.1.244:3000/api/location/${idLocation}`)
                        .then(response => response.json())
                        .then(data => setLocations(prevLocations => [...prevLocations, data]))
                        .catch(error => console.error(error))
                })


            })
            .catch(error => console.error(error))



    }, [])

    return (
        <>
            <Navhead />
            {posts.map(post => {
                const location = locations.find(loc => loc.id === post.location_id)
                return (
                    <div key={post.id}>

                        <Post
                            username={post.user.username}
                            location={location.name}
                            img={post.url}
                            comment={post.comment}
                            key={locations.id}
                        />




                    </div>
                );
            })}
        </>
    );
}

export default Feed;