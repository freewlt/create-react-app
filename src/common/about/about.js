import React from 'react'
import 'antd/dist/antd.css';
import Header from '../../components/header/header'

class about extends React.Component {
    constructor(props){
        super(props);
        this.state={
            active:'about'
        }
    }
    render(){
        return(
            <div>
            <Header active = {this.state.active}/>
            about
            </div>
        )
    }
}

export default about