import React from 'react';
import ReactDOM from 'react-dom';
import style from './style/main.scss';

class Content extends React.Component{
    construnctor(props){
        super(props);
    }
    render(){
        return (
            <tbody>
               
            </tbody>
        );
    }
}

class LeaderBoard extends React.Component{
    constructor(props){
        super(props);
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
                            <th>Points in past 30 days</th>
                            <th>All time points</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

ReactDOM.render(
    <LeaderBoard />, document.getElementById('root')
);
