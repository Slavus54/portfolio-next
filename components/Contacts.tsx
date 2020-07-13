import React, {useState} from 'react'
import './Contacts.css';
import Button from '@material-ui/core/Button';
import Modal from 'react-awesome-modal';
import io from 'socket.io-client';
import axios from 'axios';
import gql from 'graphql-tag';
import { ApolloLink, onError } from "apollo-link-error";
import { useQuery, useMutation } from '@apollo/react-hooks';
import usersGQL from '../gql';

const Contacts: React.FC<{props: any}> = (props) => {
    const users = usersGQL;
    const socket = io('http://localhost:4000');
    const [open, setOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const add_user = gql`
        mutation AddUser($name: String, $email: String, $phone: String) {
            AddUser(name: $name, email: $email, phone: $phone) {
              name  email phone
            }
        }
    `;
    const errorLink = onError(({ graphQLErrors }) => {
        if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
      })
    const { loading, data } = useQuery(users);
    const [AddUser, {error} ] = useMutation(add_user);
    if (error) {
        console.log(error)
    }

    const handleOpen = (): void => {
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };
    interface userInt {
        name: string,
        email: string,
        phone: string
    }
    const onSend = (): void => {
        let data: userInt = {
            name: name,
            email: email,
            phone: phone
        }       
        // socket.on('now', data => {
        //     alert(data.msg)
        // })
        socket.emit('email', data)
        
    }

    const onApi = (): void => {
        let data = {
            name: name,
            email: email,
            phone: phone
        }
        axios.post('/api', data)
        .then((res) => {
        console.log(res)})
    }

    socket.on('data', (data: object) => {
        console.log(data)
    })

    const onGetApi = async () => {
    console.log(data)
        try {
            let res = await axios.get('/api')
            console.log(res.data)
        } catch (e) {
            console.log(e)
        }
    }
    const onSendGQL = () => {
        AddUser({variables: {name: name, email: email, phone: phone},
             optimisticResponse: true
        })
    }
    return (
        <div className="container">
            <div className="contacts-headline">Contacts</div>
            <ul className="contacts-spec">
                <li>
                    <div className="spec">
                        Phone<br />
                        +79134579350
                    </div>
                </li>
                <li>
                    <div className="spec">
                        Mail<br />
                        x.miros@yandex.ru
                    </div>
                </li>
                <li>
                    <div className="spec">
                        Media<br />
                        https://vk.com/mitrogoga_ru
                    </div>
                </li>
            </ul>
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
                    <Button onClick={onGetApi} variant="contained" color="primary">Get API</Button>
                    <Button onClick={onSendGQL} variant="contained" color="primary">Send GQL</Button>
                </form>
                </div>
            </Modal>
        </div>
    );
}

export default Contacts;