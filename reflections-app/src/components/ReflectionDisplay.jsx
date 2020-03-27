import React, { Component, Fragment } from 'react';


class ReflectionDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <h2>Past Entries</h2>
                <div id="past-entries">
                    {this.props.entriesLog.map(
                        (entry,inx) => {
                            return (
                                <div key = {inx}>
                                    <p>Date: {entry.postDate}</p>
                                    <p>Entry: {entry.postEntry}</p>
                                    <p>Confidence Level: {entry.confidenceLevel}</p>

                                </div>
                            )
                        }
                    )}
                </div>
            </Fragment>
         );
    }
}
 
export default ReflectionDisplay;