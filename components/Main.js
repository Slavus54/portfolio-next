import React, {useState} from 'react'
import './Main.css';
import Link from 'next/link'
import { useRouter } from 'next/router'
import {useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Modal from 'react-awesome-modal';
import io from 'socket.io-client';
import axios from 'axios';


const Main = () => {
    //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 - key
    const socket = io('http://localhost:4000');
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const onSend = () => {
        let data = {
            name: name,
            email: email,
            phone: phone
        }        
        // socket.on('now', data => {
        //     alert(data.msg)
        // })
        socket.emit('email', data)
        
    }
    async function getServerSideProps() {
        // Fetch data from external API
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        const data = await res.json()
        
        // Pass data to the page via props
        return { props: {data} }
    }
    const onApi = async () => {
        let data = {
            name: name,
            email: email,
            phone: phone
        } 
        let res = await axios.post('/api', {data: data})
        console.log(res.data)
        console.log((await getServerSideProps()).props.data)
    }

    socket.on('data', (data) => {
        console.log(data)
    })

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const onAbout = () => {
        router.push('/about')
    }
    
    return (
        <div className="container">
            <div className="main-headline__first">Hi, my name is <span className="sign__word-standard">Vyacheslav Kupriyanov</span></div><br />
            <div className="main-headline__second"><span id="i">I'm</span> junior frontend engineer</div><br />
            <div className="main-description"><span id="i">I'm</span> creating websites, SPA, Mobile, PWA, SSR Apps and WordPress sites using huge stack of technologies</div>
            <Slider style={{marginTop: '7%' ,height: '250px', width: '100%', backgroundColor: '#007bff'}} {...settings}>
            <div>
                <img src="../static/img/website.png" alt="Sorry" />
            </div>
            <div>
                <img src="../static/img/SPA.png" alt="Sorry" />
            </div>
            <div>
                <img src="../static/img/PWA.png" alt="Sorry" />
            </div>
            </Slider>
            <Button onClick={handleOpen} style={{marginTop: '75px'}} variant="contained" color="primary">Consultation</Button>
            <Modal width="400" height="300" visible={open} effect="fadeInUp" onClickAway={handleClose}>
                <Button onClick={handleClose} variant="contained" color="secondary">&times;</Button>
                <div style={{padding: '25px'}}>
                <div>Send me an email</div>
                <form style={{display: 'flex', flexDirection: 'column'}}>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="name" />
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
                    <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="phone" />
                    <Button onClick={onSend} variant="contained" color="primary">Send</Button>
                    <Button onClick={onApi} variant="contained" color="primary">Send API</Button>
                </form>
                </div>
            </Modal>
            <Button variant="contained" onClick={onAbout}>HistoryEEE</Button>
        </div>
    );
}

export default Main;