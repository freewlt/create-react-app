import React, {Component}  from 'react';
import {Menu} from 'antd';
import './header.css';
import {Link} from 'react-router-dom';

class header extends Component{
   constructor(props){
       super(props);
       const {active} = this.props;
       this.state={
           current:active
       }
    }
    render(){
        return( 
            <div className="header">
                <Menu selectedKeys={[this.state.current]}
                    mode="horizontal" >
                    <Menu.Item key="home"><Link to='/index'>首页</Link></Menu.Item>
                    <Menu.Item key="about"><Link to='/about' >关于我</Link></Menu.Item>
                     <Menu.Item key="article"><Link to="/article">文章分享</Link></Menu.Item>
                     <Menu.Item key="resource"><Link to="/resource">资源共享</Link></Menu.Item>
                </Menu>
            
            </div>  
          
        )
    }
}

export default header;