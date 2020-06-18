import React from 'react';

class Stateful extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLiked: false 
        };
    }

    _toggleLikeState = () => {
        this.setState({
            isLiked: !this.state.isLiked
        });
    }

    render() {
        const {name} = this.props;
        const {isLiked} = this.state;

        return (
            <>
            <h3>{name}</h3>
            <span>{ isLiked ? '👍' : '👎' }</span>
            <button onClick={ this._toggleLikeState }>
            Toggle Like
            </button>
            </>

        );
    }

}

export default Stateful