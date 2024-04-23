import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function CarouselPhotos(props) {
    const [index, setIndex] = useState(0);
    const [data, setData] = useState([])
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const API_URL = import.meta.env.VITE_API_URL;
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO ;
    useEffect(() => {
        fetch(API_URL + 'photo/animal/' + props.id)
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
            .catch(error => console.error(error))

    }, []);

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
                data.map((item, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img className='img-fluid' src={`${API_PHOTOS}${item.url}`} />
                            {/* <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    );
}

export default CarouselPhotos