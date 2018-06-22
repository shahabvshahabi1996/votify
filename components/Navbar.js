import { Menu, Icon , Button , Row , Col } from 'antd';
import Head from '../components/Head';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import {Router} from '../routes.next';

export default class Navbar extends React.Component {
  state = {
    current: '',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
    // Router.push(`${e.key}`);
  }
  render() {
    return (
      <div>
        <Head/>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={{border : 'none',backgroundColor:'transparent'}}
          >
            <Menu.Item key="/">
              <a href="/" style={{color : '#252525',fontWeight : 'bold' , fontSize : 20}}>Votify</a>
            </Menu.Item>
            <Menu.Item key="/github" style={{float : 'left',border:'none'}}>
              <a href="https://github.com/shahabvshahabi1996/votify" target="_blank"><Icon type="github"/> Github</a>
            </Menu.Item>
            <Menu.Item style={{float : 'right',border:'none'}}  key="/login">
              <Icon type="user"/> Login
            </Menu.Item>
            <Menu.Item style={{float : 'right',border:'none'}} key="/signup">
              <Icon type="form"/> Signup
            </Menu.Item>        
          </Menu>
      </div>
    );
  }
}