import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function CarouselPhotos(props) {
    const [index, setIndex] = useState(0);
    const [data, setData] = useState([])
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        fetch('http://192.168.1.244:3000/api/photo/animal/' + props.id)
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
                            <img className='img-fluid' src={`http://192.168.1.244:3000/photos/${item.url}`} />
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