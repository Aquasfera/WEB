import React, { useEffect } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function TabsComponent() {
    const [key, setKey] = useState('home');
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://192.168.1.244:3000/api/post/user/' + 1)
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
            .catch(error => console.error(error))
    }, []);
    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="home" title="Home">

                <div className='col-12 justify-content-center d-flex flex-row flex-wrap'>
                    {
                        data.map((item, index) => {
                            return (
                                <Link to={`/post/${item.id}`} className='col-5 m-1'>
                                
                                    <img className='img-fluid' src={`http://192.168.1.244:3000/photos/${item.url}`}></img>
                                
                                </Link>
                            )
                        }
                        )}
                </div>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                Tab content for Contact
            </Tab>
        </Tabs>
    );
}

