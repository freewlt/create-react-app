import React,{Component} from 'react'
import Header from '../../components/header/header'

class resource extends Component {
    constructor(props){
        super(props);
        this.state={
            active:'resource'
        }
    }
    render(){
        return(
            <div className="resource">
                <Header active={this.state.active}/>
            </div>
        )
    }
}

export default resource
