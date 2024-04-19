import React, { useEffect } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import UserCard from './UserCard';
export default function TabsComponent() {
    const [key, setKey] = useState('Mis Post');
    const [data, setData] = useState([])
    const [user, setUser] = useState([])
    const API_URL = import.meta.env.VITE_API_URL;
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO ;
    console.log(API_URL)
    useEffect(() => {
        fetch(API_URL +'post/user/' + 1)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(error => console.error(error))
    }, []);
    useEffect(() => {
        fetch(API_URL + 'user')
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })
        .catch(error => console.error(error))
    }
    , []);

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="Mis Post" title="Mis Post">

                <div className='col-12 justify-content-center d-flex flex-row flex-wrap'>
                    {
                        data.map((item, index) => {
                            return (
                                <Link to={`/post/${item.id}`} className='col-5 m-1'>
                                
                                    <img className='img-fluid' src={`${API_PHOTOS}${item.url}`}></img>
                                
                                </Link>
                            )
                        }
                        )}
                </div>
            </Tab>
            <Tab eventKey="usuarios" title="Usuarios">
                {
                    user.map((item, index) => {
                        return (
                            <UserCard username={item.username} avatar={item.avatar} id={item.id}  />
                        )
                    })
                }
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                Tab content for Contact
            </Tab>
        </Tabs>
    );
}

