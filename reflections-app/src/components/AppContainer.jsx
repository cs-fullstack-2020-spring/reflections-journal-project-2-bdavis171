import React, { Component } from 'react';
import ReflectionForm from './ReflectionForm';
import ReflectionDisplay from './ReflectionDisplay';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            entriesLog: []
         }
    }

    // add an entry to the log
    addEntry = (newEntry) => {
        this.state.entriesLog.push(newEntry);
        this.setState({
            entriesLog: this.state.entriesLog
        })
    }

    // display page. pass down the addEntry method to the form component and the entriesLog array to the display component
    render() { 
        return ( 
            <div className="container">

                <h1 id='header'>Let's Reflect</h1>

                <div id="reflect-form">
                    <ReflectionForm addEntry={this.addEntry}/>
                </div>

                <div id="reflect-display">
                    <ReflectionDisplay entriesLog={this.state.entriesLog}/>
                </div>

                <h3 id="footer">Designed By Brandon Davis</h3>

            </div>
         );
    }
}
 
export default AppContainer;