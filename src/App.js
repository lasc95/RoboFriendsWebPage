import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Navegacion from './Navegacion'
import './App.css';
import Scrool from './Scrool';
import ErrorBoundry from './ErrorBoundry';

//todo componente que cambia de estado, debe ser escrito como una clase
class App extends Component{
    constructor(){
        //como extiende, debemos llamar tambien la clase que extiende
        super();
        this.state = {
            robots : [], 
            searchfield: ''
            //searchfield es lo que se irá actualizando
        }
    }//constructor


    componentDidMount(){ 
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
           return response.json()
        }).then( users =>{
            this.setState({robots : users})
        })

    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value}); //aqui se gatilla el cambio, se actualiza el searchfield
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })//march

        return(
            <div className ='tc'>
            <h1 className='f1'>RoboFriends</h1>
            
            <SearchBox searchChange = {this.onSearchChange} /> 
            <Scrool>
                <ErrorBoundry>
                    <CardList robots ={filteredRobots}/>
                </ErrorBoundry>
            </Scrool>
            
            </div>
        )//return
        //searchbox lo pasamos con props de this.onsearh para que haga el match

    }//render


}//fin clase

export default App;

