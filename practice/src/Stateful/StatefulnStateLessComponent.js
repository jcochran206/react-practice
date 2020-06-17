import React, { Component } from 'react';

class Profile extends Component {
    constructor(props){
        super(props)
        this.state { isLiked: false };
    }

    componentDidMount() {
        console.log('Stateful component successfully mounted.')
    }

    toggleLikeState = () => {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render(){
        const {name} = this.props;
        const  {isLiked} = this.props;

        return(
            <div>
            <h3>{ name }</h3>
            <span>{ isLiked ? 👍 : 👎 }</span>
            <button onClick={ this.toggleLikeState }>
            Toggle Like
            </button>
            </div>
        )
    }  
}

HelloMessage.propTypes = { name: React.PropTypes.string };
HelloMessage.defaultProps = { name: 'World' };

ReactDOM.render(<Profile name="Alice" />, mountNode);

import React from 'react';

function HelloMessage({ name }) {
    return(
        <div>Hello {name}</div>
    );
};

HelloMessage.propTypes = { name: React.PropTypes.string };
HelloMessage.defaultProps = { name: 'World' };

ReactDOM.render(<HelloMessage name="Alice" />, mountNode);