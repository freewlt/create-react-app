import React ,{Component} from 'react';
import Header from '../../components/header/header'

class article extends Component {
    constructor(props){
        super(props);
        this.state={
            active:'article'
        }
    }
    render(){
        return(
            <div className="article">
                <Header active={this.state.active}/>
            </div>
        )
    }
}

export default article


