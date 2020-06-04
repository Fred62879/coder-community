import React from 'react';
import { connect } from 'react-redux';
import { setImg } from '../../actions';

class Button extends React.Component {

    _onImgUpload = (event) => {
	const url = event.target.value;
	alert(event.target.value);
	this.props.setImg(url);
    }

    _omImgRm = (event) => {
	this.props.setImg('');
    }
    
    render() {
	if (this.props.imgurl === '')
	    return <div>
	    <form>
	    <input type="text" placeholder="img url" onChange={this._onTitle}></input>
	    <button onClick={this._onImgUpload}>Upload Image</button>
	    </form>
	    </div>;
	
        return (<div>	
                <h2></h2>
                <button onClick={() => this.props.increment(5)}>Remove</button>
                </div>
               )
    }
}

const mapStateToProps = (state) => {
    return { imgurl: state.imgurl };
}

export default connect(mapStateToProps, { setImg })(Button);
