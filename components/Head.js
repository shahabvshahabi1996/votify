import React , {Component} from 'react';
import Head from 'next/head';

export default class Header extends Component{
    render(){
        return(
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.6.2/antd.min.css"></link>
            </Head>
        )
    }
}