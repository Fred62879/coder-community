import React from 'react';
import { connect } from 'react-redux';
// import Navbar from './Navbar';
import NewPost from './NewPost/NewPost';
// import Messarea from './Messarea';
// import About from './About';
// import View from './View';
// import { toggle } from '../actions';
import '../App.css';

// const App = () => {
class App extends React.Component {

    render() {
	return (
		<div class="container">
		<NewPost/>
            </div>
	);
    }
}

const mapStateToProps = (state) => {
    return { page: state.page };
}

// export default connect(mapStateToProps, { toggle })(App);
export default App;
