import React from 'react';
import ReactDOM from 'react-dom';
import style from './style/main.scss';

const axios = require("axios");

function Tbod (props){
    let body = props.data.map((obj, iter) => {
        return (
            <tr key = {obj.img}>
                <td>{++iter}</td>
                <td><img src={obj.img} /> <a href={"https://freecodecamp.com/" + obj.username}>{obj.username}</a></td>
                <td>{obj.recent}</td>
                <td>{obj.alltime}</td>
            </tr>
        );
    });
    return (
        <tbody>
            {body}
        </tbody>
    );
}

class LeaderBoard extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isDays: true,
            days: [],
            allTime:[]
        }
    }

    getData(url, which){
        let thus = this;
        axios.get(url).then((response) => {
            thus.setState({
                [which] : response.data
            });
        }).catch((error) => {
                console.log(error);
            });
    }

    componentDidMount(){
        this.getData("https://fcctop100.herokuapp.com/api/fccusers/top/recent", "days");
        this.getData("https://fcctop100.herokuapp.com/api/fccusers/top/alltime", "allTime");
    }

    handleClick(which){
        let bool = which == "days" ? true : false;
        this.setState({
            isDays: bool
        });
    }

    render(){
        return(
            <div>
                <table>
                    <caption>LeaderBoard</caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Camper name</th>
                            <th onClick = {() => this.handleClick("days")}>Points in past 30 days</th>
                            <th onClick = {() => this.handleClick("allTime")}>All time points</th>
                        </tr>
                    </thead>
                    <Tbod data = {this.state.isDays ? this.state.days : this.state.allTime}/>
                </table>
            </div>
        );
    }
}

ReactDOM.render(
    <LeaderBoard />, document.getElementById('root')
);
