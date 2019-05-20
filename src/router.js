import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import login from './layouts/login/login';
import home from './layouts/home/home';
import about from './common/about/about';
import article from './common/article/article';
import resource from './common/resource/resource';
 
export default class ReouterWrap extends Component{
    render(){
        return(
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component ={login} exact/>
                        <Route path="/index" component ={home} exact/>
                        <Route path="/about" component ={about} exact/>
                        <Route path="/article" component ={article} exact/>
                        <Route path="/resource" component ={resource} exact/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}