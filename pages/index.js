import React , { Component } from 'react';
import Navbar from '../components/Navbar';
import { Button , Row , Col , Timeline , Carousel, Icon ,Divider , Card } from 'antd';

export default class HomePage extends Component {
    render() {
        return (
            <div style={{backgroundColor : '#fff'}}>
                <Navbar/>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <Row style={{padding : 15}}>
                        <Col span={2}></Col>
                        <Col xs={24} sm={24} md={20} lg={20}>
                            <div style={{justifyContent : 'center',textAlign : 'center',borderRadius : 5}}>
                                <h1 style={{fontSize : 30}}>Vote Faster and Easier with Votify</h1>
                                <p style={{fontSize : 20,opacity:0.8}}>voting automation system for everyone built in Nodejs and Reactjs</p>
                                <div style={{justifyContent : 'space-around'}}>
                                    <Button type="primary" style={{borderRadius : 20,margin : 5}} size="large" icon="eye-o">Pereview Demo</Button>
                                    <Button style={{borderRadius : 20,margin : 5}} size="large" icon="form">Sign up</Button>
                                </div>
                            </div>
                        </Col>
                        <Col span={2}></Col>                                        
                    </Row>
                    <Divider />
                    <Row style={{marginBottom : -20}}>
                        <Col span={2}></Col>
                        <Col xs={24} sm={24} md={20} lg={20}>
                            <Row style={{maxHeight : '300px'}}>
                                <Col xs={24} sm={24} md={8} lg={10}>
                                    <h2>Manage Your <span style={{fontWeight : 'bold'}}>Voting</span> , Set Custom <span style={{fontWeight : 'bold'}}>Voting System</span> , and View <span style={{fontWeight : 'bold'}}>Stats</span></h2> 
                                    <Button size="large" icon="user" type="primary" style={{borderRadius : 20 , margin : 5}}>Login</Button>
                                    <Button size="large" icon="form" style={{borderRadius : 20 , margin : 5}}>Signup</Button>
                                </Col>
                                <Col xs={24} sm={24} md={16} lg={14}>
                                    <img style={{    
                                        width: "70%",
                                        maxWidth: "100%",
                                        height: "auto",
                                        flex: "0 0 70%"}} src="https://kutt.it/images/callout.png"/>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={2}></Col>                        
                    </Row>
                    <Divider style={{display:'none'}}/>
                    <Row style={{backgroundColor:'#eee'}}>
                        <br/>
                        <Col span={2}></Col>
                        <Col xs={24} sm={24} md={20} lg={20}>
                            <div style={{justifyContent : 'center',textAlign : 'center',padding : 10,backgroundColor:'#eee'}}>
                                <h1 style={{fontSize : 30}}>Cutting edge features.</h1>
                                <br/>
                                <br/>                                
                                <Row>
                                    <Col xs={24} sm={24} md={6} sm={12}>
                                        <div style={{margin : 5,borderRadius : 5,minHeight : '180px',textAlign : 'center'}}>
                                           <h1><Button icon="share-alt" type="primary" shape="circle" size="large"/></h1>
                                           <h3>Shareable</h3>
                                           <p>Just Make it and Share it with others!</p>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} sm={12}>
                                        <div style={{margin : 5,borderRadius : 5,minHeight : '180px',textAlign : 'center'}}>
                                           <h1><Button icon="edit" type="primary" shape="circle" size="large"/></h1>
                                           <h3>Custom voting</h3>
                                           <p>Use custom voting for your links. Add or remove them for free.</p>                                           
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} sm={12}>
                                        <div style={{margin : 5,borderRadius : 5,minHeight : '180px',textAlign : 'center'}}>
                                           <h1><Button icon="code-o" type="primary" shape="circle" size="large"/></h1>
                                           <h3>API</h3> 
                                           <p>Use the provided API to create, delete and get URLs from anywhere.</p>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} sm={12}>
                                        <div style={{margin : 5,borderRadius : 5,minHeight : '180px',textAlign : 'center'}}>
                                           <h1><Button icon="heart-o" type="primary" shape="circle" size="large"/></h1>
                                           <h3>Free & Open Source</h3> 
                                           <p>Completely open source and free. You can host it on your own server.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={2}></Col>                        
                    </Row>
                </div>
            </div>
        )
    }
}