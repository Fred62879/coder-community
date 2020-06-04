import React from 'react';
import { connect } from 'react-redux';
import imgP from './ImgPanel';
import { load, store } from '../../actions';

class NewPost extends React.Component {

    // _onTitle(event) => {
	
    // }
    
    _onText = (event) => {
        this.props.load(event.target.value);
    }

    _onSubmit = (event) => {
        event.preventDefault();
        this.props.store('MESS_ADD', this.props.input);
    }

    render() {
        return(
                <form id="messform">
		<imgP/>
                <h4>Your input is: {this.props.input}</h4>
		<input type="text" placeholder="Title" onChange={this._onTitle}></input>
	        <textarea id="newmess" onChange={this._onText} placeholder="Type content"></textarea>
	        <br></br>
	        <button id="submit" onClick={this._onSubmit}>Submit</button>
		<input type="reset" defaultValue="Reset" />
                </form>)
    }
}

const mapStateToProps = (state) => {
    return { contents: state.contents, input: state.input };
}

export default connect(mapStateToProps, { load, store })(NewPost);
