import React, { Component } from 'react';

class ReflectionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postDate: '',
            postEntry: '',
            confidenceLevel: ''
        }
    }

    // handle changes to fields
    handleChanges = (event) => {

        if (event.target.name === 'date') {
            this.setState({ postDate: event.target.value });
        }

        else if (event.target.name === 'entry') {
            this.setState({ postEntry: event.target.value });
        }

        else if (event.target.name === 'confidence') {
            this.setState({ confidenceLevel: event.target.value });
        }

    }

    // handle submission
    handleSubmission = (event) => {

        event.preventDefault();

        let newEntry = {
            postDate: this.state.postDate,
            postEntry: this.state.postEntry,
            confidenceLevel: this.state.confidenceLevel
        }

        this.props.addEntry(newEntry);

        this.setState({
            postDate: '',
            postEntry: ''
        })
    }

    render() {
        return (
            <form action="">

                <fieldset>

                    <legend>Your Reflection</legend>

                    <div className="form-group">

                        <label htmlFor="date">Date:</label>

                        <input type="date" name='date' id='date' onChange={this.handleChanges} value={this.state.postDate} />

                    </div>

                    <div className="form-group">

                        <label htmlFor="entry">Entry:</label><br/>

                        <textarea name="entry" id="entry" onChange={this.handleChanges} value={this.state.postEntry} cols="30" rows="10"></textarea>

                    </div>

                    <div className="form-group">

                        <label htmlFor="confidence">Confidence Level:</label>

                       <select name='confidence' id='confidence' onChange={this.handleChanges}>

                           <option value="">--</option>

                           <option value="high">High</option>

                           <option value="medium">Medium</option>

                           <option value="low">Low</option>

                       </select>

                    </div>

                    <div className="form-group">

                       <button onClick={this.handleSubmission}>Post Reflection</button>

                    </div>

                </fieldset>

            </form>
        );
    }
}

export default ReflectionForm;