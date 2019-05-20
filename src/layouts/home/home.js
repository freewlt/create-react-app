import React,{Component} from "react";
import 'antd/dist/antd.css';
import Header from '../../components/header/header';
import SidebarLf from '../../components/sidebarLf/sidebarLf'

export default class Home extends Component{
    constructor(props){
        super(props);
        fetch("/news",{method:'GET'}).then(
            function(res){
                console.log(res);
                res.json().then(function(data){
                    console.log(data);
                });
            }
        )
        this.state={
            active:'home'
        }
    }
    render(){
        return (
            <div id="Home">
                <Header active={this.state.active} />
                <SidebarLf/>
            </div>
        )
    }
}