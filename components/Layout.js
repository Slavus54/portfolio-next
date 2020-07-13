import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from './Navbar';
import ApolloClient from 'apollo-boost';
import { onError } from 'apollo-link-error';
import {ApolloProvider} from '@apollo/react-hooks';

const Layout = (props) => (
        <ApolloProvider client={client}>
        <div>
            <Head>
                <title>Main</title>
                <link href="/Main.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500&display=swap" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            </Head>
            <Navbar />
            <div style={{margin: '65px'}} className="container">
                {props.children}
            </div>
        </div>
        </ApolloProvider>

)

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    onError: ({ networkError, graphQLErrors }) => {
        console.log('graphQLErrors', graphQLErrors)
        console.log('networkError', networkError)
    }
})

export default Layout;