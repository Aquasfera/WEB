/* eslint-disable react/prop-types */



function Post(props) {

    const bgcolor = {

        height: "100vh",
        backgroundColor: "#0A141F"
    }

    const textColor = {
        color: "#CCDBDC",
    }

    const displayHeader = {
        display: "flex",
        justifyContent: "space-between",
    }

    const display = {
        display: "flex",
    }

    const iconSize = {
        height: "25px",
        widht: "25px"
    }


    return (
        <div style={bgcolor}>
            <div className="container">
                <div className="post-header" style={displayHeader}>
                    <div className="post-username">
                        <p className="username" style={textColor}>{props.username}</p>
                    </div>
                    <div className="post-location" style={display}>
                        <img className="location-icon" style={iconSize} src="../src/assets/icons/location-icon.svg" />
                        <p className="location" style={textColor}>{props.location}</p>
                    </div>
                </div>

                <img className="post-img" src={props.img} />
                <div className="post-icons flex">
                    <div className="insta-icons">
                        <img className="heart-icon" src="" />
                        <img className="comment-icon" src="" />
                    </div>
                    <div className="encilopedia-icon">
                        <img className="pedia-icon" src="" />
                    </div>
                </div>

                <div className="photo-description">
                    <p className="description" style={textColor}>{props.comment}</p>

                </div>

            </div>

        </div>
    )


}

export default Post;