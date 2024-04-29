import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function CarouselPhotos(props) {
    const [index, setIndex] = useState(0);
    const [data, setData] = useState([])
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const API_URL = import.meta.env.VITE_API_URL;
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO;
    useEffect(() => {
        fetch(API_URL + 'photo/animal/' + props.id)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(error => console.error(error))

    }, []);

    return (
        <section className='row d-flex justify-content-center'>
            <Carousel activeIndex={index} onSelect={handleSelect} className='col-12 col-lg-7'>
                {
                    data.map((item, index) => {
                        return (
                            <Carousel.Item key={index} className='' >
                                <img className='img-fluid' src={`${API_PHOTOS}${item.url}`} />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </section>
    );
}

export default CarouselPhotos