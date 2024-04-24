import React, { useEffect } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import UserCard from './UserCard';
export default function TabsComponent(props) {
    const [key, setKey] = useState('Mis Post');
    const [data, setData] = useState([])
    const [user, setUser] = useState([])
    const API_URL = import.meta.env.VITE_API_URL;
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO;
    useEffect(() => {
        fetch(API_URL + 'post/user/' + props.actualUser.id)
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
            style={props.textStyle}
        >
            <Tab eventKey="Mis Post" title="Mis Post">

                <div className='col-12 justify-content-center d-flex flex-row flex-wrap'>
                    {
                        data.map((item, index) => {
                            return (
                                <Link key={index} to={`/personal-post/${item.id}`} className='col-5 m-1'>

                                    <img className='img-fluid' src={`${API_PHOTOS}${item.url}`}></img>

                                </Link>
                            )
                        }
                        )}
                </div>
            </Tab>
            <Tab eventKey="usuarios" title="Usuarios">

                <div className='col-12 justify-content-center d-flex flex-row flex-wrap'>
                    {
                        user.map((item, index) => {
                            return (
                                <UserCard key={index} username={item.username} actualUser={props.actualUser} token={props.token} avatar={item.avatar} id={item.id} />
                            )
                        })
                    }
                </div>

            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                Tab content for Contact
            </Tab>
        </Tabs>
    );
}

